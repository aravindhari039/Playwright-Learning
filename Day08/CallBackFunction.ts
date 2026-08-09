
// A function passed as an argument to another function and executed later


// this function takes the parameter of callback function 

export{}

/* 
function greet(name:string, callback:(sss:string)=>void)
{
    console.log(name);
    callback("hello");                   // call the function 
}


// call backfunction

function showMsg(sss:string)
{
    console.log(sss)
}

// call the function and passing the callback function

greet("hi", showMsg)

 */

// example 2

function sum(a:number,b:number, callback:(result:number)=>void)
{
    let result=a+b;
    callback(result)
}



function displayResult(result:number):void
{
    console.log(result)
}

sum(10,20, displayResult)