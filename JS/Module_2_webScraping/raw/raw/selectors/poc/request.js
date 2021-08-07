

// npm i request
let request= require("request");
console.log("Before");
request=('https://www.google.com/',cb);

function cb(error,response,html){
    //console.error('error:',error)//print the error if one occurred
    //console.log('body',html);//print the html for google home page
    
    if(error){
        console.log(error);
    }
    else if(response.statusCode==404){
        console.log("page not found");
    }
    else{
        console.log(html);
        console.log("html:",);
    }

}
console.log("After");