
// super()- used to invoke the parent class constructor
// super - used to invoke the parent class method
export{}

class Parent
{
    num:number=10;

    constructor(){
        console.log("This is Parent Class Constructor...")
    }

    display(){
        console.log("This is Parent class display() Method")
    }
}

class Child extends Parent
{

    num:number=20;   // overridden property

    constructor(){
        super();           //(must we should call)
        console.log("This is Child Class Constructor...");
    }

    show(){
        console.log(this.num);
        console.log("This is Child Class Method")
    }

    display(): void {
        super.display();
        console.log("This is Child class display() Method");
    }
}

let c1=new Child();
c1.show();           // chidl class method

c1.display();        // chidl class 

