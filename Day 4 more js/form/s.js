// // const firstnamefn = (e)=>{
//     // const val =e.target.value;
//     // if(val.length>3)
//     // {
//     //     console.log('correct');
//     // }
//     // console.log(e);
// // }
// // const lastnamefn = (e)=>{
// //     const val =e.target.value;
// //     // if(val.length>3)
// //     // {
// //     //     console.log('correct');
// //     // }
// //     console.log(e);
// // }
// // const agefn = (e)=>{
// //     // const val =e.target.value;
// //     // if(val.length>3)
// //     // {
// //     //     console.log('correct');
// //     // }
// //     console.log(e);
// // }

// //(homework)  event delegation in js

// const submitForm=(e)=>{
//     e.preventDefault();
//     // console.log(e);
//     const t =e.target;
//     const res={
//     hobbies :[],
//     };
//     // let nm;
//     // let vl;
//     // let ty;
//     // console.dir(e.target.value);
//     for(let i=0;i<t.length;i++)
//     {    
//         // const imp=t[i];
//         // console.dir(t[i].value);
//         // console.dir(t[i].type);
//        const ty=t[i].type;
//     //    console.log(ty,vl);
//     //    res[nm]=vl;
//     if(ty!=='submit')
//         {
//             const vl=t[i].value;
//             const nm =t[i].name;
        
//        }
//        if(ty=='checkbox' && t[i].checked)
//        {
//            // console.log(t[i].checked)
//            res.hobbies.push(vl);
//         }
        
        
       
//        if(ty!=='checkbox')
//        {
//         // let nm;
//         res[nm]=vl;
//        }
//     }
//     console.log(ty,vl);
// }
//high order function(home work)
//call back function


//function

function sum(a,b,fun)
{
    // return a+b;
    const ans=a+b;
    fun(ans);
}

function print(x)
{
    console.log(x);
}

sum(3,4,print);