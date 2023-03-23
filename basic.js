// Data Types
// 1. String

let str1 = "anything";
str1 = "true";

// kuch bhi dal skte "" lga kr string me

// 2. Number
let num1 = 1;
num1 = 2;
num1 = 3;
num1 = 3.0;

// any number without "" is treated as number

// 3. Boolean
// true or false
var recording = true;
recording = false;

// 4. Object
// ye ek chiz hota jiske kuch properties hote
var insaan = {
  acha: true,
  age: 14,
  name: "Idk",
  class: "8",
};

// iske vals access kr skte
console.log(insaan["acha"]);

// or

console.log(insaan.acha);

// 5. Array

// ye ek type ka list hota

var list = ["JavaScript", "HTML", "CSS"];
// inka vals ko index se access kar skte index whole no se start hota 0 , 1

console.log(list[0]); // JavaScript
console.log(list[1]); // HTML

// ispr loops aur bohot chiz kar skte aage bate krnge hm har data type ke methods ki :)

// Ways to Store a Variable
// var , let or const

var abc = "ABC"; // var se ek data strore kar skate ye edit kar skte kahi pe bhi
abc = "2";
var abc = "3"; // both allowed var lga kr ya na lga kar agar re write karna tb only
// but yahi ek problem deta agar galti se kahi re likh dia like

var a = "ABC";
// 50k Lines of Code
var a = "CDE";
// rewrite krdia mistake se

let abcd = "ABC"; // let same as var solving the rewrite problem
abcd = "2";

// let abcd = "2"; // error
const abcde = "ABC";
// abcde = "newVal"; // error because const can't be re written
// mtlb const value variables ko bdl na skte hamlog ek baar jo value set === set

// logging value to console (easy)
console.log(abc);

// ye pure code ka link mil jayega description my byee!
