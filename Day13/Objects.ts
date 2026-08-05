
// Object - object contains properties and methods.  -- variables and methods
//object is a collection of key_value pairs. key is also called property name and value is also called property value.

//Ex

// employee - name, id, sal, dep
//             bonus(), getDetails()


// student - name, sid, grade
//            getdetails(), setdetails()


// Different ways to create an object in TS/JS

//1. using "object" type - Directly defines the value of variable (JS/TS)
//2. Inline type object - we also defines the datatype of keys (TS)
//3. using type aliases (JS/TS)
//4. using the classes (JS ES16/TS)


//1. using "object" type - Directly defines the value of variable (JS/TS)


let employee={           // here object is too generic 

    name:"john",
    age:24,
    salary:50000,
    dept:'testing',
    getDetails:function():string{

        //console.log("Function :",this.name,this.age)
        return `${this.name}  from  ${this.dept}`;
    } 
}

console.log(employee.getDetails())
console.log("Name :",employee.name)
console.log(typeof employee)

// accesing object - approach 1 (using "."(dot) notation)

console.log(employee.dept)
console.log(employee.name,employee.age)

// accesing object - approach 2 (using bracket notation)

console.log(employee["name"],employee["salary"],employee["dept"])
console.log(employee["getDetails"]())

//modify the value

employee.salary=60000         // employee["salary"]=60000

console.log(employee.salary)

//==============================================================================================

//2. Inline type object - we also defines the datatype of keys (TS)

let student:{

    name:string,                      // every time first we need to create a structure and then declared the value
    sid:number,
    grade:string,
    getsummary:()=>string
} =
{ 
    name:"john",
    sid:24,
    grade:"A",
    getsummary:function()
    {
        return `${this.name} get a "${this.grade}" grade`
    }

}

console.log(student.grade)
console.log(student.getsummary())

//Problem with Inline type object --> we need to create a same structure for multiple object - students

//==============================================================================================

// 3. using "type" aliases (TS) - allows creating a new name for existing type

type product={

    name:string,
    price:number,
    getInfo: ()=>string

};

let book1:product=
{
    name:"type script",
    price:3000,
    getInfo:function(){
        return `${this.name} Cost ${this.price}`
    }
}

let book2:product=
{
    name:"java",
    price:4000,
    getInfo: function(){
        return `${this.name} Cost ${this.price}`
    }
}

console.log(book1.getInfo())
console.log(book2.name)

// Ex:2 Intersection type

type Personal={
    name:string,
    age:number
};

type Contact={
    email:string,
    phone:number
};

type Candidate=Personal & Contact &
{
    getInfo:()=>string
}

let cand:Candidate={
    name:"john",
    age:25,
    email:"afasdf@gmail.com",
    phone:1234565432,
    getInfo:function(){
        return `Hi, i am ${ this.name} and my age is ${this.age}`
    }

}

console.log(cand.getInfo())
console.log(cand.email)


//==============================================================================================

//4. using the classes (JS ES16v/TS)

class Person{

    id:number;
    firstname:string;
    lastname:string

    constructor(id:number,firstname:string,lastname:string){

        this.id=id
        this.firstname=firstname
        this.lastname=lastname

    }

    getfullname():string{
        return `${this.firstname} ${this.lastname}`;
    }

    getinfo():string{
        return `${this.id} is  ${this.getfullname()}`
    }

}

let person1=new Person(123,'john', 'dree');
console.log(person1.getinfo())

let person2=new Person(456,'joseph',"vijay")
console.log(person2.getinfo())

let person3 = new Person(789,'go','pal')
console.log(person3.getfullname())