
// Tuple is fixed length array where each element is specific type
// To store different types of data together

// 1. Tuple with 2 values of string, number
/* 
let person:[string,number]=["john",3]

console.log(person[0])
console.log(person[1])

console.log(person) */

// 2. Tuple with multiple types

let user:[number,string,number,boolean]=[1,"hari",25,true]
console.log(user)

/* 
// traditional for loop

for(let i=0; i<user.length; i++)
{
    console.log(user[i]);
}
 */

// as same as for " for  in " loop

/* 
// "for of" loop

for(let value of user)
{
    console.log(value)
} */

//let id:[number]=[1]
//console.log(id)

// 3.Tuple Array [Array of Tuple]

let students:[number,string][]=[[1,"john"],[2,"james"],[3,"scott"]]
console.log(students)

console.log(students[1]);   // [ 2, 'james' ]

let res=students[1]

console.log(res)   //  [ 2, 'james' ]
console.log(res[1])   // james