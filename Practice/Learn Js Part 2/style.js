//Function

//practice question
// const vowel=(c)=>
// {   
//     let count=0;
//     for(let i of c )
//     {
//       if(i=='a' || i=='e' || i=='i' || i=='u' || i=='o')
//       {
//         console.log(i);
//         count++;
//       }
//     }
//     console.log(count);
// }

// let a = prompt("Enter Anything :");
// let c=a.toLowerCase();
// vowel(c);

//ForEach method/function

// let arr = [1,3,2,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// })

//practice question
//for a given array of numbers, print the square of numbers of array

// let a=[1,2,3,4,5];
// a.forEach((val)=>{
//     console.log(val*val);
// })

//another method for question

// let a=[1,2,3,4,5];
// let calcsquare=(a)=>{
//     console.log(a*a);
// }

// a.forEach(calcsquare);

// let a=[23,56,89,98,95,93];
// let b=a.filter((val)=>{
//     return val>90;
// })

// console.log(b);

let a=prompt("Enter any number");
let b=[];
for(let i=0;i<a;i++)
{
   b[i]=i+1;
}

// console.log(b);

let c = b.reduce((prev,curr)=>{
    return prev*curr;
})
console.log(c);