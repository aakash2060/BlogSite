const express = require("express");

//importing Blog from modules folder to get blog object
const Blog = require("../models/blog");

//renders all the blogs on homepage
const blog_home = (req, res) => {
  Blog.find() // gives all the blogs
    .sort({ createdAt: -1 }) // sorts the blog based on latest time creation
    .then((result) => {
      res.render("./blogs/index", { title: "Blogs", blog: result });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Failed to load Blogs" });
    });
};

// posts/submits newly created blogs
const blog_post = (req, res) => {
  const blog = new Blog(req.body); // req.body is usable because of the middleware urlencoded, extracts the form data as it has POST request in create.ejs
  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.render("404", { title: "Failed to create Blog" });
    });
};

// gets the create
const create_blog_get = (req, res) => {
  res.render("./blogs/create", { title: "Create Blog" });
};

const blog_get_byID = (req, res) => {
  const id = req.params.id; // gets the id for us from mongoose
  Blog.findById(id)
    .then((result) => {
      res.render("./blogs/description", { title: "Blog Description", blog: result });
    })
    .catch((err) => {
      res.render("404", { title: "Blog Not Found" });
    });
};

const delete_byID = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      //sends json to frontend and redirects to /home after deletion
      res.json({ redirect: "/" }); // sending json as we are using ajax request (if we use ajax request we don't need to refresh the entire web page
    }) //when we send and retrieve data from the server asynchronously

    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to delete the document" });
    });
};

module.exports = {
  blog_home,
  blog_post,
  create_blog_get,
  blog_get_byID,
  delete_byID,
};
