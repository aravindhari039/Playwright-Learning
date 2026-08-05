
// Arrow Function / Lambda Function

/* 
  lambda function refers anonymous function in programming
  lambda function are a concise mechanism to represent anonymous function (make the code less)
  These functions are also called as Arrow function
  
  There are three parts to lambda function.

  1. Parameter - A function may optionally have parameters
  2. arrow notation ( => ) - 
  3. statements - represent the function instruction set

  syntax :

  let variable = (parameters) =>
  {
      //block of code
  }

  variable();

*/

/* 
let msg = ():void =>        <------ No parameters Arrow function
{
    console.log("Hello");
}

msg();

 */

/* 
let add = (x:number, y:number):number =>           <------------- parameters arrow function
{
    return x+y;
}

console.log(add(10,20)); */

/* 
 In arrow function have implict return
 it will only work for one single statement 
 
*/
 
/* 
let add = (x:number, y:number):number => x+y;     // only for single statement, if you have more must written in braces.

console.log(add(2,3)) */

/* 
let details = (id:number, name:string, email?:string):void =>       <-------- optional arrow function
{                                                
    console.log("ID :",id);                          // if first parameter is optional and also make following parameter also optional else it throwing error
    console.log("Name :",name);                
    if(email !=undefined)
        console.log("Email :",email);
}

//details(3,"Hari","hari@gmail.com");
details(4,"Aravind") */

/* 
let discount = (price:number, per:number=0.50):void =>       <---------- Default parameter arrow function
{
    let Discount=price*per;
    console.log(Discount);
}

//discount(1000,0.20);

discount(1000) */


let elements = (...data:(number | string)[]):number =>       // <---------- Rest parameter arrow function
{
    return data.length;
}

console.log(elements(1,"scott", 2, 23, "john"));