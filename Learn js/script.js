// console.log("prassan varshney");    this is used for print message
// console.log('prassan varshney');  // there is no problem in javascript is we used double quotes(" ") or (''). it works same.

//to create variables in javascript
// age=56;
// console.log(age);
// nan="fkdjfn";
// console.log(nan);
//boolean types values - true and false\

// isss = true;
// ssss= false;
// console.log(isss);
// console.log(ssss);

//let  it is a keyword for declaring variables.variable cannot be re-declared or updated.a block scope variable.
// let a=67;
// console.log(a); 

//var  it is a keyword for declaring variables. variables can be redeclared and updated. a global scope variable.
// var age=90;
// var age=78;
// console.log(age);

//const it is a keyword for declaring variables.varaibles can be redeclared and updated.a block scope varaible.
// const a=45;
// a=434;     // we do not assign or update value when before we used a const keywod.this shows error in console not in editor.

//data types in javascript- Number, Boolean, String, Undefined, Null, Symbol, Bigint  --(Primitive)
//two types of data types - primitive and Non-Primitive
// Non-Primitive - object
//typeof
// let a=34;
// console.log(typeof(a));
// let name="prassan";
// console.log(name);
// console.log(typeof(name));

//objects
// const student = {
//     name :"Prassan Varshney",
//     age:22,
//     education:'MCA',
// };
// console.log(student);

//practice questions
//  const practice1 ={
//     name:'djndsjnssms',
//     rating:4,
//     offer:5,
//     price:32134,
//  };
//  console.log(practice1);

// const practice2 ={
//     name:"prassan varshney",
//     follow:true,
//     message:true,
//     post:4,
//     followers:195,
//     following:78,
//     heading:"Prassan varshney",
// };
// console.log(practice2);
// console.log(typeof(practice2));

//OPERATORS 
//exponential
// let a=9; 
// let b=4;
// console.log("a ** b = ",a ** b );

//conditons - if , else if, 
//ternary operator ---    condition: true output false output

//prompt - it is used to input from user

// let name=prompt("Enter the name");
// console.log(name);
//practice question
// let a=prompt("Enter any number :");
// if (a%5==0)
// {
//     console.log("It is a multiple of 5");
// }
// else{
//     console.log("It is not multiple of 5");
// }

//
// practice question

// let a = prompt("Enter any number");
// if(a>=80 && a<=100)
// {
//     console.log("A");
// }
// else if(a>=70 && a<=79)
// {
//     console.log("B");
// }
// else if(a>=60 && a<=69)
// {
//     console.log("C");
// }
// else if(a>=50 && a<=59)
// {
//     console.log("D");
// }
// else if(a>=40 && a<=49)
// {
//     console.log("E");
// }
// else{
//     console.log("FAIL");
// }
     

//for loop

// for(let i=0;i<4;i++)
// {
//     console.log("kya haal hai ");
// }
// let a=0;
// for(let i=1;i<=5;i++)
// {
//     a=a+i;
// }
// console.log(a);

//while loop

// let a=1;
// while(a<10)
// {
//     console.log(a);
//     a++;
// }

// let a="prassan";
// for (let i of a){
//     console.log("i= ",i);
// }

// let student = { 
//     name:"prassan varshney",
//     class:"mca",
//     roll_number:23,
//     age:22
// };

// for (let key in student){
//     console.log("key = ",key,"value = ",student[key]);
// }

// practice question
//print all even numbers from 0 to 100
// for(let i=1;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
    
// }

//practice question 2
//create a game when you start any random game number.ask the user to keep guessing the game number until the real number comes.

// let a=90;
// let usernum = prompt("GUESS THE NUMBER");
// while(usernum != a)
// {
//     usernum=prompt("You choose wrong number please choose another number");
// }
// console.log("Congratulations! You Choose Right Number");

//template literals 

// let obj={
//     item:"pen",
//     price:10,
// };

// let a = `the cost of ${obj.item} is ${obj.price}.`;
// console.log(a);

//Methods in JS
//toUpperCase()
//let str="dfndjf";
// let a=str.toUpperCase();
// console.log(str);
// console.log(a);
 
//toLowerCase()
// let a = "SHDFJNHncdnjn";
// let s=a.toLowerCase();
// console.log(a);
// console.log(s);

//.trim
// let a=" dnsffnd   ";
// console.log(a.trim());

// //.slice
// let a="12345678";
// console.log(a.slice(2,4));

//.concat
// let a="fmsn";
// let b="krsj";
// console.log(a.concat(b));

//.replace
// let a="hello";
// console.log(a.replace("h","y"));

//.replaceAll
// let a="hello";
// console.log(a.replaceAll("l","y"));

//.charAt(index)
// let a="hello";
// console.log(a.charAt(4 ));

//practice questions
//prompt the user to enter their full name. generate a username for them based on the input.start username with @, followed by their full name and ending with the full name length
// let a=prompt("Enter Your Full Name:");
// let b=a.length;
// let c=a.concat(b);
// let d="@";
// console.log(d.concat(c));
  

//Arrays
// let a=["hello","prassan", "trillioniere","varshney"];
// for(let i in  a){
//     console.log(a[i]);
// }

//Practice Questions
// let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// arr.push("Amazon");
// console.log(arr);
// arr.shift();
// console.log(arr);
// console.log(arr.splice(1,1,"OLA"));
// console.log(arr);

