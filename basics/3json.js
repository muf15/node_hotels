//  JSON
const jsonString='{"name":"John","age":30, "city":"New York"}';
const jsonObject=JSON.parse(jsonString); //Convert JSON string to object
console.log(jsonObject.name);


const objectToConvert = {
  name: "Alice",
  age: 25
};

const json = JSON.stringify(objectToConvert); // Convert object to JSON string
console.log(json);
console.log(typeof json);