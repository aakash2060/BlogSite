// Load environment variables from .env file
require("dotenv").config();

// Import required modules
const express = require("express");
const mongoose = require("mongoose");

// Create Express app
const app = express();

// Connect to MongoDB using environment variable
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // %40 is replacing @ sign for proper character encoding//this is asynchronous
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

const blog_routes = require("./Routes/blog_routes");

//register view engine
app.set("view engine", "ejs");

// Middleware
// static middleware that accesses the file inside public through express
app.use(express.static("public")); // takes css file
app.use(express.urlencoded({ extended: true })); //takes post request data from the blog create form

/* 

app.get("/", (req, res) => {
  //  res.send('<p>homepage</p>'); sends homepage as response
  res.sendFile("./pages/index.html", { root: __dirname }); //sendFile is provided by express
});

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", { root: __dirname });
});

//redirects  to /about
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  // use() directly sends the file to the browser, making it default so its better to use it at the bottom
  res.status(404).sendFile("./pages/404.html", { root: __dirname });
});
*/

// //sandbox routing to mongodb database
// app.get("/add-blog", (req, res) => {
//   // adds a  blog
//   const blog = new Blog({
//     //passing arguments for our blog object
//     title: "hello new blog3",
//     snippet: "this is good",
//     body: "body should be long",
//   });

//   blog
//     .save() // this is asynchrounous
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blog", (req, res) => {
//   Blog.find() // gives away all the blogs
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       consolo.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("6679b4b9370ec57385fe6a2f")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//homepage with express
// app.get("/", (req, res) => {
// const blog = [
// creating an array object called blog which has all the blogs
//   {
//     title: "All details to Buy a Car in United States as a Student",
//     snippet:
//       "Start off from Facebook Marketplace always, clean title is preferred",
//   },
//   {
//     title: "Cook a pasta easily as a noobie",
//     snippet: "start watching a youtube video for it",
//   },
//   {
//     title: "Five companies to start investing on",
//     snippet: "invest on index funds",
//   },
//   {
//     title: "How to build a webapp with react",
//     snippet: "start off with documentation and crash course",
//   },
// ];
// //  res.render() renders index with dynamic content
// res.render("index", { title: "Home", blog }); //passing the blog
//   res.redirect("/");
// });

//about page
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// redirect to about if about-us
app.get("/about-us", (req, res) => {
  res.redirect("about");
});

//blog routes
app.use("/", blog_routes);

// redirect to 404 page if random links
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found!" });
});
