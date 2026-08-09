
/*     Arrays
    --------------------

 - Array is a special type of variable that stores multiple values
 - The value can be same datatype or different datatypes
 - Array are declared using'[]' or the generic 'Array<T>' type
 - Indexing starts from 0
 - Arrays are an ordered collection of elements

*/


// using leteral
{}export

/* 
let name:string[]=[];     // declaration     // we shouldn't mention the size of the array---> its error in this

// intialization / assigning

name[0]="john"
name[1]="scott"
name[2]="james"
name[3]="deen"

console.log(name) */

/* 
let name:string[]=["john","scott","james","deen"]

console.log(name) */

// Generic type

/* 
let name:Array<string>=["john","scott","james"]

console.log(name) */
 
let data:Array<number|string>=[1,"john",2,3,"scott"]
console.log(data) 


let mix:Array<any>=["hari",2,3,true,null]
//console.log(mix[2])
 
for(let i=0; i<mix.length; i++)
{
    console.log(mix[i])
} 

// Iterating using the "for ... in " loop(index)
 
for(let i in mix)
{
    console.log(mix[i])
} 


 // Iterating using the "for ... of " loop(values)

for(let value of mix)     // "value " is a like variale we can give whatever
{
    console.log(value)
}
 

// passing an array to the function 

// search the element

 
function check(a:number, b:number[]):boolean
{
    for(let i in b){

        if(a===b[i])
            return true;
    }
    return false;
}

let b:number[]=[10,20,30,40]

console.log(check(50,b))
console.log(check(20,b)) 

// function takes array and return array


function display(arr:string[]):string[]
{
    let res:string[]=[];

    for( let i in arr)
    {
        res[i]=arr[i].toUpperCase();    // we can use same array also arr[i]=arr[i].touppercase();---> replaceable by new one
    }
    return res
    
}

let words:string[]=["a","c","D","world","TYPEscript"]

console.log(display(words));