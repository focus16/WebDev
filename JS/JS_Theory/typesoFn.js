
// function fn(param){
//     console.log("param is ",param);
//     console.log();
// }

// fn(10);
// fn("abcder");
// let a=[1,2,3,4,5];
// fn(a);
// fn({name:"rajeev"});

//function statement
//  function fn(){
//      console.log("i am a function statement");
//  }

//  //statement
//  fn();
 

// in js function are treated as a variable
// var assign -> value or addres
// let b=a;
// console.log("b",b);
// a.pop();
// console.log("b",b);




//function expression;
let exp=function(){
    console.log("i am a function expression");
}

//evocation
exp();

// IIFE  immediately invoke function expression
(function fn(){
    console.log(" i am an IIFE i will call immediately");

})();


// arrow function

let arrowfn=()=>{
    console.log("i am an arrow function");
}
arrowfn();