const express = require("express");

const { blog_home } = require("../controllers/Blog_Controller");
const { blog_post } = require("../controllers/Blog_Controller");
const { create_blog_get } = require("../controllers/Blog_Controller");
const { blog_get_byID } = require("../controllers/Blog_Controller");
const { delete_byID } = require("../controllers/Blog_Controller");

const router = express.Router();

// gets the home page
router.get("/", blog_home);

// posts a new blog in home
router.post("/submit", blog_post);

// gets the create new blog page
router.get("/create", create_blog_get);

// gets each individual blog by id
router.get("/:id", blog_get_byID);

// delete each individual blog by id
router.delete("/:id", delete_byID);

module.exports = router;
