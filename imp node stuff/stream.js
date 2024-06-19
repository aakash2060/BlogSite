const fs = require("fs");
// stream of data, data are sent in chunks for a user to view, example: youtube videos
//reading a stream
const readStream = fs.createReadStream("./docs/text2.txt", {
  encoding: "utf8",
});
//writing on a stream
const writeStream = fs.createWriteStream("./docs/text3.txt");

// readStream.on("data", (chunk) => {
//   console.log("\n-------NEW CHUNK OF DATA------\n");
//   console.log(chunk);

 
//     writeStream.write("\n NEW CHUNK\n");
//     writeStream.write(chunk);

// });

//piping > basically does what we did above but with less lines of code
readStream.pipe(writeStream);