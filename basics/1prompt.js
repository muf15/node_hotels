var prompt=require('prompt-sync')();
const age=prompt("Enter your age: ");
if (age<18){
    console.log("You are not allowed to enter");
}
else{
    console.log("Welcome to our website");
}   