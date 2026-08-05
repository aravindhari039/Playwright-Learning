let cities=["Chennai","Bangalore","Hyderabad","Mumbai"];         // array of strings
for(const city of cities)
    console.log(city);
                                      // objects
let students={
    name:"Aravind",
    age:25,
    course:"JavaScript"
};
console.log(students.name);
students.name="Hari";
students.salary=50000;
console.log(students.name);
console.log(students);
console.log("-------------------");
                                        // array of objects
let employee=[
    { 
        name:"Aravind",
        dept:"Testing",
    },
    {
        name:"Hari",
        dept:"DevOps"
    }
]
console.log(employee[0].dept);
console.log("-------------------");
for (const emp of employee){
    console.log(emp.name);
    console.log(emp.dept);
}

let user={
    name:"Aravind",

    call(){
        console.log("Hello "+this.name);
    }
}
user.call();