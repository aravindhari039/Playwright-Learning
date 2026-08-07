
// Method Overlodaing and Constructor Overloading in TypeScript

class Calculator
{

    // Constructor Overloading

    constructor();

    constructor(a:number,b:number);

    constructor(a?:number,b?:number){

        if(a!=undefined && b!=undefined){

            console.log("Sum of a & b : ",(a+b))
        }
        else
            console.log("Default Constructor called...")
    }

    // Method Overloading
    add(a:number,b:number):number;
    add(a:number,b:number,c:number):number;

    add(a:number,b:number,c?:number){

        if(c!=undefined)
            return a+b+c;

        return a+b;
    }

}

// Constructor Overloading

let c1=new Calculator();

let c2=new Calculator(10,20);

// Method Overloading

console.log("Adding 2 Numbers",c1.add(2,3));

console.log("Adding 3 Numbers",c2.add(1,2,3))
