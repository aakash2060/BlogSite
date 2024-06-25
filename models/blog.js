const mongoose = require("mongoose"); //importing mongoose

const Schema = mongoose.Schema; // taking Schma from mongoose

const blogSchema = new Schema( // creating a new object called blogSchema with attributes
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema); // defines 'Blog' to have the schema object we created with all attributes
module.exports = Blog; // exporting Blog 
