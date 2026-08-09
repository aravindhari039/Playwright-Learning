// Variable : Container which can hold/Store some data

// var,  let,  const

//Syntax: Keyword VariableName : Datatype(Optional) = Value
// eg:  var a:number=25;    or
//      var a=25;

//    var  vs let vs const
//   -----------------------
/*
   1) Scope
   2) Declaration/Value Assignment
   3) Re-Declaration
   4) Re-initilization/Re-Assignment
   5) Hoisting
*/

// var --> Functional Scope
// let & const --> Block Scope

// 1. Scope


function varScope(){
    
    if(true){
        var msg="hello";
        console.log(msg);
    }
    console.log(msg);
}
varScope();

function blockScope(){

    if(true)
    {
        let msg="hello";
        const greet="world";
        console.log(msg);
        console.log(greet);
    }
//    console.log(msg);       //incorrect
//    console.log(greet);     //incorrect
}


// 2. Declaration/ Value Assignment

// "var" can be declared without initilization


var x;
console.log(x);   //Undefined
x=35;
console.log(x);   //35       

// "let" also has the same behaviours as "var"

// "const" must be initialized at the time of declaration

// const y;
// console.log(y);   //Error: const must be initialized

const y=45;
console.log(y);   //45


//3. Re-Declaration

// var - allow the re-declaration of the same variable, but 
// let & const - does not allow the re-declaration of the same variable


var a=10;
var a=20;   //allowed
console.log(a);   //20 

/*
let b=10;
let b=20;   
console.log(b);   //its give me the compile time error     

"const" has the same behaviour as "let".
*/

//4. Re-initilization/Re-Assignment

//var and let allows the re-assingment 
//const doesn't allow the res-assingment

let c=10;
c=20;
console.log(c);   //20


//5. Hoisting   var(Hoisted with undefined)  let & const (Not intitialized)
 
console.log(a);   //undefined
var a=5;
console.log(a);   //5 

// console.log(b);   //Error: Cannot access 'b' before initialization
let b=10;
console.log(b);   //10    

// and also same for "Const"

//console.log(z);    //Error: Cannot access 'z' before initialization
const z=100;
console.log(z);
