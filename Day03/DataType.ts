/* 1. Primitive Data Type (Buil in)

Number
String
Boolean
Null                         //   we can store only one data into the variable at the time.
Undefined
Any
Union Type
void

2. Non-Primitive Data Type (Object)

Array
class
Function 
interface
Touple etc,. */
//------------------------------------------------------------------------------
// 1. Number Data Type
 
let age:number=25;
let price =23.55;
let ph=123456765;

console.log(age);
console.log("Price:",price);
console.log("Ph No:",ph);

console.log(typeof(age));   // number -- It will show the type. 
//--------------------------------------------------------------------------------
// 2. String Data type

/* 

1. DoubleQuote ( " " )
2. SingleQuote ( ' ' )
3. Backtick    ( ` ` )

*/
 
let first:String="Aravind";
let last='Hari';

console.log("Hello",first,last);    // Hello Aravind Hari

let greet=`helo`;
console.log(greet);     // helo

let msg=`hello ${first} ${last}`
console.log(msg);      //  hello Aravind Hari 

console.log(`hi ${greet} ${last}`)   //hi helo Hari
 
//--------------------------------------------------------------------

// 3. Boolean Datatype
 
let isStudent:boolean=true;
let hasjob:boolean=false;

console.log("Is Student.?",isStudent); 

//---------------------------------------------------------------

//4. Null / Undefined
/* 
let empty:null=null;
let notassign:undefined=undefined;

console.log(empty);
console.log(notassign);

let price:number;
console.log(price);     // undefined */

//---------------------------------------------------------------

//5. Any Datatype
// it losses TypeScript Benefit

let value:any="Welcome";
console.log(typeof(value));

value=100;
console.log(typeof(value));

value=true;
console.log(typeof(value));

 

//---------------------------------------------------------------

// 6. Union Type
 
let id:number | String | boolean;

id="123abc";
console.log(id);

id=12343;
console.log(id);

id=true;
console.log(id); 

//---------------------------------------------------------------

// 7. Void type
// used for function that doesn't return anything
/* 
function msg(){

    console.log("Welcome");
}

msg(); */
 
function sum(x:number,y:number):number //----> return type
{
    return(x+y);
}

//let res=sum(2,3);
//console.log(res); 
console.log(sum(2,4)); 