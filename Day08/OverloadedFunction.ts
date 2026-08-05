
// step:1  write a signature of a function
// step:2  implement a function
// step:3  calling a function

/* 
function getInfo(id:number):string
function getInfo(name:string):string

function getInfo(param: number|string):string
{
    if(typeof(param)==="number"){

        return(`User ID is ${param}`)
    }
    else
    {
        return(`User name is ${param}`)
    }
}

console.log(getInfo(101))
console.log(getInfo("Hari")) */

// example 2

/* 
function add(a:number,b:number):number
function add(a:number,b:number,c:number):number

function add(a:number,b:number,c?:number)
{
    if(typeof(c)==="number")    // if(c!== undefined)
    {
        return a+b+c;
    }
    else
        return a+b;

}

console.log(add(10,20))
console.log(add(10,20,30)) */

// example 3

// different return type         <---------------------------------------

/* 
function display(id:number):number
function display(name:string):string

function display(a:number|string):number|string
{
    if(typeof(a)==="number")
    {
        return(`Number is ${a}`)
    }
    else
        return(`Name is ${a}`)
}

console.log(display(123))
console.log(display("John")) */

// example 4

function input(name:string):string
function input(age:number):string
function input(isMarried:boolean):string

function input(value:string|number|boolean):string
{
    if(typeof(value)==="string")
    {
        return`Your Name is ${value} `
    }
    else if(typeof(value)==="number")
    {
        return `Your age is ${value}`
    }
    else
    {
        let res:string = value?"married":"single"    
        return res
    }
}                                                         

console.log(input("John"))
console.log(input(25))
console.log(input(true))
console.log(input(false))