
// Inheritance

// A class can reuse the properties and methods of another class.
// Inheritance can allow reuse the functionality of existing class without rewriting it.

//Method Overriding:
// A child class/sub class can provite the specific implementation of a method that is already defined in its Parent class
// The method should have same name, return type, and parameters.

// A ---- properties + methods (Parent Class/ Base Class/ Super Class)
// B extends A ---- properties + methods (Child Class/ Derived Class/ Sub Class)


//Parent class
class Car
{
    name:string;
    colour:string;
    model:string;

    constructor(name:string,colour:string,model:string)
    {
        this.name=name;
        this.colour=colour;
        this.model=model;
    }

    start(){
        console.log("Car Started...")
    }

    stop(){
        console.log("Car Stopped...")
    }

    display():string{
        return (`Car name is ${this.name},it is a ${this.colour} & model is ${this.model}`);
    }
}


//child class
class Honda extends Car
{
    carNo:number;

    constructor(name:string,colour:string,model:string,no:number)
    {
        super(name,colour,model);            // this is use to pass the value to parent class constructor
        this.carNo=no;
    }

    //Method Overriding
    start(){
        console.log("Honda Car Started...")
    }

    info(){
        console.log(`Car name is ${this.name},it is a ${this.colour} their model is ${this.model} & Carnumber is ${this.carNo} `);
        return (`Car Number is ${this.carNo}`)
    }
    
}

// Usage

let car=new Car("RR","white","Ghost Phantom")
console.log(car.display())

console.log("=================================")

let h1=new Honda("BMW","Blue","M4",9090);
console.log(h1.name);
console.log(h1.info());
console.log("This is from parent class---",h1.display())

h1.start()
h1.stop()

//Parent class variable holding child class object

let car1:Car=new Honda("TATA","white","Punch",9993);

console.log(car1.display());
car1.start();             

// car1.info();    ---> it is not possible to access the child class methods 

// we create a object for child class and to hold it in a variable with Parent class type.
// we can access only parent class properties and methods.
