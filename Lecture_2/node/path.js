let path=require("path");

let currentpath=process.cwd();

console.log("currentpath",currentpath);

let joinpath=path.join(currentpath,"abc","cde","f1.txt");
console.log();
console.log();
console.log();
console.log("joinpath",joinpath);