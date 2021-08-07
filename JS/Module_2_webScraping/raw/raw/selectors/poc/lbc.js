
//last ball comment

// npm i request
let request= require("request");
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
console.log("Before");
request=(url,cb);

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
        //console.log(html);
        // console.log("html:",);

        dataExtracter(html);
    }
}

function dataExtracter(html){
    //search tool
    let searchTool=cheerio.load(html);
    //selector
    let elemRepArr=searchTool(".match-comment-wrapper");

    let lbc=searchTool(elemRepArr[0]).text();
    console.log("lbc",lbc);
}
console.log("After");