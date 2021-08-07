
//first var  and function me memory allocate hoga
//function ka memory heap me assign hoga

const { clear } = require("node:console");

console.log("line number 5 ",a);//a=undefined
//console.log("for value b",b);//a=undefined

var a;
//var b;
a=10;  //a=10
//b=[1,2,3,4,5]; //b=

console.log("line number 13 ",a);  
//console.log(b);
fn();

function fn(){
    console.log("line number 18 ",a);
    a++
    console.log("thank you for calling",a);
}
fn();
