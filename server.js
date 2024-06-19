// localhost = 127.0.0.1 :3000 default

const fs = require("fs"); // filesystem
const http = require("http"); //communicating with http

// creating a server
const server = http.createServer((req, res) => {
  //taking requests and response as arguements

  console.log(req.url, req.method);
  // gives the url[/signup, /, etc] and method[get,post,put,delete] of request

  // set header content type
  res.setHeader("Content-Type", "text/html");
  // you can change content type to html or plain depending on what you want

  //   res.write('<head> <link rel="styleseet" href="#"></head>');
  //   //above code is done to add meta data

  //   res.write("<p> Hello world, sky here! </p>");
  //   res.write("<p>hello again</p>");
  //   //writing text
  //   res.end();

  let path = "./pages/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/index":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200; // sends status code based on route
      break;
    case "/aboutmepage":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    // redirects to /about if someone uses /aboutme on route
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //sending a html page to the browser
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
     //hel res.end(data); ps us to write data and end
      //   res.write(data); same as above line of code
      //   res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  // listening on port 3000
  console.log("listening for requests on port 3000");
});

// status codes:
// 200- ok
// 301- Resource
// 404- Not found
// 500- Internal server error

// 100 - informational, 200 - sucess codes
// 300 - codes for redirect, 400 - user or client error codes
// 500 - server error codes
