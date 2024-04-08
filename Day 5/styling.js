// let a = prompt("Enter any input");
// let b = a.length;
// if(b>0)
// {
//    console.log(a);
// }
// else 
// {
//     console.log("Koi nhi hota hai");
// }

// let arr=[2,10,67,98];
// function printarr(arr)
// {
//     // for(let i=0;i<arr.length;i++)
//     // {
//     //     console.log(arr[i]);
//     // }
//     arr.forEach(printpretty);
// }
// function printpretty(element)
// {
//     console.log(element);
// }
// printarr(arr);

//function declaration
//fuction assignment 
//function anonymous
//arrow function assignment
// array.forEach((a) => {
//     console.log(a);
// });
// array.forEach((a,b,c) => {
//     console.log(a,b,c);
// });
// printarray(array);
// array=[9,5,3,55];

//Asynchronous Nature in javascript
//Global execution center (GEC)
// setTimeout(function,time);
// setTimeout(printPretty,10000);
// function printPretty(elem)
// {
//     console.log('hello');
// }

//ASYNCHROMOUS JAVASCRIPT

// console.log('GEC START');
// function printpretty(){
//     console.log('prettystart');
//     let ans=7+9;
//     console.log(ans);
//     console.log('prettyend');
// }    

// setTimeout(printpretty,10000);
// console.log('GEC END');

//Eventlistener

// const btn=document.getElementById('btn');
// btn.addEventListener("click",printpretty);  //used to operations with click

//API  Application Programming interface

// console.log('start');
// const req = fetch("https://api.github.com/PRASSANVARSHNEY");
// console.log(req);
// req.then(()=>console.log('Fetched'));
// console.log('End');

// console.log('start');
// const req=fetch('https://dummyjson.com/products/1')
// const res=req.then(res => res.json())
// // .then(res=>console.log(res))
// // .then(json => console.log(json))
// res.then((data)=>console.log(data));
//     console.log('end');

// console.log('start');
// const req=fetch('https://dummyjson.com/products/1').then(res => res.json()).then((data)=>console.log(data)).catch((err)=>{
//     console.log("Error occured in fetch API");
// });
// // .then(res=>console.log(res))
// // .then(json => console.log(json))

//     console.log('end');
//map filter 