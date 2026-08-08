
// Access Modifiers 

/* 
1. public
2. protected
3. private

*/

// Parent class

class Person
{
    public name:string;    // public property - accessible anywhere
    protected age:number;        // protected property - accessible within the class and child class
    private mail:string;     // private property - accessible only within the class 

    constructor(name:string,age:number,mail:string)
    {
        this.name=name;
        this.age=age;
        this.mail=mail;
    }

    display(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.mail);
    }
}

// child class

class Employee extends Person
{
    private empid:number;

    constructor(name:string,age:number,mail:string,empid:number)
    {
        super(name,age,mail);
        this.empid=empid;
    }

    details(){
        console.log(this.name);   // public accessible
        console.log(this.age);   // protected accessible
//      console.log(this.mail);  // private not accessible - private property

        console.log(this.empid);  // private accessible  - this is present in same class
    }
}

let emp=new Employee("James",30,"james123@gmail.com",3)

emp.details();

console.log("================")

emp.display();

console.log("================")

console.log(emp.name);
// console.log(emp.age);     // not accessible outside of the class
// console.log(emp.mail);    // not accessible 
// console.log(emp.empid);   // not accessible outside of the class
