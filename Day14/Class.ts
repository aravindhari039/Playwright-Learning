
/* 
1. Class
2. Read only properties
3. Optional property
4. Static variables and methods

*/

class Student
{
    readonly studentId:number;      //Read only (can only be assigned once, inside constructor)
    name:string;            // Regualr property
    email?:string;         // Optional propety (can be undefined)
    static schoolname:string="ABC school";

    constructor(id:number,sname:string,email?:string)
    {
        this.studentId=id;
        this.name=sname;
        this.email=email;      // no need to pass the value mandatory
    }

    display(){

        console.log("Student id ",this.studentId);
        console.log("Student name ",this.name);

        if(this.email!=undefined){
            console.log("email-- ",this.email)
        }
        else
            console.log("Email not provided")

        console.log(Student.schoolname)
    }

// static methods

    static changeSchoolName(newName:string){
       Student.schoolname=newName;
    }
    
}

let student1=new Student(3,"john","john234@gmail.com")

student1.display()

// Try to modify 

// student1.studentId=2;          // we can't modify this property bcuz it is a read only property
student1.name="Scott";

Student.changeSchoolName("XYZ School")
console.log("==================================")

student1.display();

// Static 

// whenever you mention the "static" keyword that is common for every object
// you have using the static varible/methods by using class name
// once you will change the value of static varibale it will affect the all object  
