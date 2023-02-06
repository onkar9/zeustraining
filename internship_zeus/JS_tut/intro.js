console.log("My name is Onkar Mirajkar");


//variables
let age=32;
let fname="Onkar";
let lname="Mirajkar"

console.log(fname+" " + lname + " is " + age + " years old.");

//Const variables
const a=32;
// let a=34;

let b=32;
b=34;

console.log(a);
console.log(b);


/*-------- Strings in JS--------------------*/

let firstname = "Dylan";
let lastname = 'Israel';

console.log(`${firstname} ${lastname}` .toUpperCase());   //Gets the string to upper case
console.log(`${firstname} ${lastname}` .toLowerCase());   //Gets the string to lower case
console.log(`${firstname} ${lastname}` .split(''));     //Splits evert character in the string
console.log(`${firstname} ${lastname}` .split(' '));    //Splits the different words in the string


/*-------- Numbers in JS--------------------*/

let exam=7;
let e=7.77;

console.log(typeof exam);
console.log(typeof e);
console.log(parseFloat(e));
console.log(parseInt(e));
console.log(e.toFixed(2));
console.log(e.toFixed(1));   //Round the number to the 1 decimal point 


let example1 = parseInt("33 World 22");
let example2 = parseFloat('44 Dylan 33');
let example3 = 55.3333.toFixed(0);
let example4 = 200.0.toFixed(2);

console.log(example1);
console.log(example2);  
console.log(example3);
console.log(example4);

console.log(typeof example1);       // parse Int/Float  gives out a number...
console.log(typeof example2);       // parse Int/Float  gives out a number...
console.log(typeof example3);       // .toFixed() gives out a string
console.log(typeof example4);       // .toFixed() gives out a string
