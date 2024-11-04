// Ways to write function
function add(a, b) {
  return a + b;
}

var add = function (a, b) {
  return a + b;
};

var add=(a,b) => {return a+b;}

var add = (a, b) => a + b;

var result = add(2, 10);
console.log(result);

(function () {
  console.log("Hi");
})();

// CallBack Function
function callback() {
  console.log("Added");
}

const add = function (a, b, call) {
  var result = a + b;
  console.log("Result: " + result);
  call();
};

add(13, 4, function (){
    console.log("Added successfully");
});

add(1, 4, () => console.log("Added successfully"));

// fs & os module (core modules of node.js)
var fs = require("fs");
var os = require("os");

var user = os.userInfo();
console.log(user.username);

fs.appendFile("greetings.txt", "Hi " + user.username + "!\n", () =>
  console.log("File created successfully")
);

console.log(fs);


//Exporting a module
//Lodash module (for data manipulation)
var _ = require("lodash");
const notes = require("./2notes.js");
console.log("Server file available!");
var age = notes.age;
var result = notes.addNumber(age + 18, 23);
console.log(age);
console.log("Result: " + result);

var data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString("hi"));
