
/* 
1. An interface in Typescript is a way to define the structure of an object
2. It tells the compiler what properties and types an object should have
3. It's like a blueprint for object 

Abstract MEthod: we create only signature of the method ( there is no implementation )

interface InterfaceName
{
properties 
abstract methods
}

1. Regular Properties
2. Optional Properties
3. Readonly Propertries & Function types
4. Exdending Interfaces
5. Class implements interface

*/

export{}

//Ex 1: Basic interface

interface Person1
{
    name:string;
    age:number;
}

let student:Person1={

    name:"john",
    age:30
}

console.log(student.name);
console.log(student.age);
console.log(student);        // { name: 'john', age: 30 }


// Ex 2: Optional Interface

interface Employee
{
    eid:number;
    ename:string;
    email?:string;
}

let emp:Employee={
    eid:3,
    ename:"scott"
}

let emp1:Employee={
  
    eid:4,
    ename:"james",
    email:"abc@gmail.com"
}

console.log(emp.eid, emp.ename,emp.email);     // 3 scott undefined
console.log(emp1.eid, emp1.ename,emp1.email);  // 4 james abc@gmail.com

//Ex 3: Read only properties ( read only prevent modification ) & Function Type

interface Book{
    name:string;
    readonly author:string;

    display():void;
}

let b1:Book={

    name:"Learn Playwright",
    author:"hssin",

    display() {
        console.log(b1.name, b1.author);   
    }
}

console.log(b1.name);
console.log(b1.author);
b1.display();

console.log("After Changing...")

b1.name="Learn Typescript";
console.log(b1.name);

// b1.author="sdfsdaf" ---> this is error


//Ex 4: Extending Interface (Inheritance applicable)

// interface won't Accept "static" keyword

// Parent interface
interface Animal{
    name:string;
}

interface Dog extends Animal{
    color:string
}

let d1:Dog={
    name:"Buddy",
    color:"Black",
}  

console.log(d1.name);
console.log(d1.color);

// Ex 5: 
// class can extends another class
// interface can extends another interface

// class can implement interface

interface Animals{
    name:string;
    sound():void;
}
              // must we have to re-assign the properties in the class 

class Dogs implements Animals{

    name:string;

    constructor(name:string){
        this.name=name;
    }

    sound(): void {
        console.log("Wow Wow...")
    }

}

let pet = new Dogs("Husky");
console.log(pet.name);
pet.sound();
