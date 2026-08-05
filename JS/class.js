class Students{                                    // normal class
    display(name){
        console.log("Student name :" +name);
    }
}
let s=new Students();
s.display("Aravind");
                                           // parameterized constructor and method
class Employee{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    showDetails(){
        console.log("Employee name :"+this.name);
        console.log("Employee age :"+this.age);
    }
}
let emp=new Employee("Aravind", 25);
emp.showDetails();

class Calculator{
    add(a,b){
        console.log("Addition :"+(a+b));
    }
    subtract(a,b){
        console.log("Subtraction :"+(a-b));
    }
    multiply(a,b){
        console.log("Multiplication :"+(a*b));
    }   
    divide(a,b){
        console.log("Division :"+(a/b));
    }
}
let cal=new Calculator();
cal.add(10,5);
cal.subtract(10,5);
cal.multiply(10,5);
cal.divide(10,5);

console.log("first");
setTimeout(()=>{
    console.log("second");
}, 2000);
console.log("third");

async function fn(){
    console.log("first");
setTimeout(()=>{
   // await promise.resolve();
    console.log("second");
}, 2000);
console.log("third");
}
fn();

