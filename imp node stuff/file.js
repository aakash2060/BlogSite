const fs = require("fs");

// reading a file
fs.readFile("./docs/text.txt", (err, data) => {
  // it is asynchrousnous so takes time
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// writing in a file
fs.writeFile("./docs/text.txt", "hello, baby", () => {
  console.log("file was updated");
});

// writing in a file
// if i don't have a file called text1.txt then it creates one
fs.writeFile("./docs/text1.txt", "hello, daddy", () => {
  //
  console.log("file was updated");
});

// makes directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  //delete directories
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

//deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
