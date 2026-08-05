
// Function - A function declared with the name

/* 
 function functionName(parameter):return type
 {
       // block of code
 }
 
 functionameName();

*/

// No parameterized method
/* 
function display():void
{
    console.log("Typescript");
}

display(); */

// parameterized method
/* 
function add(x:number,y:number):number
{
    return(x+y);
}

let res=add(2,3);
console.log(res);
 */

// Function with Rest parameters
//Rest parameteried dont restrict the number of values that you can pass to a function.
// there 3.is no limit of parameters

/* 
function add(...a:number[])        <--------- Same type
{
    let sum=0;

    for (let i=0; i<a.length; i++)
    {
        sum+=a[i];
    }
    console.log(sum);

}

add(1,2,3,4); */

/* 
function elements(...data:(number | string)[]):number        <---------- multiple types
{
    return data.length;
}

console.log(elements(1,"scott", 2, 23, "john")); */

/* 
fction details(id:number, name:string, email?:string):void       <------------optional parameter
{
    console.log("ID :",id);
    console.log("Name :",name);
    if(email !=undefined)
        console.log("Email :",email);
}

//details(3,"Hari","hari@gmail.com");
details(4,"Aravind") */

/*    
function discount(price:number, per:number=0.50):void        <---------- Default parameter
{
    let Discount=price*per;
    console.log(Discount);
}

//discount(1000,0.20);

discount(1000); */