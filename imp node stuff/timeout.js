setTimeout(() => {
  console.log("inside the timeout");
  clearInterval(int); // prints at given time one time
}, 10000);

const int = setInterval(() => {
  console.log("we in interval"); // prints continuously at given time
}, 1000);

setImmediate(() => {
  console.log("here is immediate"); //prints it first before anything
}, 3000);

console.log(__dirname);
console.log(__filename);