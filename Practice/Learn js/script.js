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

let a = prompt("Enter any number");
if(a>=80 && a<=100)
{
    console.log("A");
}
else if(a>=70 && a<=79)
{
    console.log("B");
}
else if(a>=60 && a<=69)
{
    console.log("C");
}
else if(a>=50 && a<=59)
{
    console.log("D");
}
else if(a>=40 && a<=49)
{
    console.log("E");
}
else{
    console.log("FAIL");
}