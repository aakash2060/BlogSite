//everything about express

const express = require("express");

//express app
const app = express();
app.use(express.static('public'));
app.listen(3000);

//register view engine
app.set("view engine", "ejs");

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

//homepage with express
app.get("/", (req, res) => {
  const blog = [ // creating an array object called blog which has all the blogs
    {
      title: "All details to Buy a Car in United States as a Student",
      snippet:
        "Start off from Facebook Marketplace always, clean title is preferred",
    },
    {
      title: "Cook a pasta easily as a noobie",
      snippet: "start watching a youtube video for it",
    },
    {
      title: "Five companies to start investing on",
      snippet: "invest on index funds",
    },
    {
      title: "How to build a webapp with react",
      snippet: "start off with documentation and crash course",
    },
  ];
  //  res.render() renders index with dynamic content
  res.render("index", { title: "Home", blog });});//passing the blog
//about page
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
// create blogs page
app.get("/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

// redirect to about if about-us
app.get("/about-us", (req, res) => {
  res.redirect("about");
});

// redirect to 404 page if random links
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found!" });
});
