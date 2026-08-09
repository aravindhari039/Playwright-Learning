
// String - Text value or a combination of characters

/* 
1. single quotes (' ')
2. double quotes (" ")
3. backticks (` `) template literals - using bacticks along with string interpolation ${} to insert variables or expressions into a string

     index starts from 0
*/

// String methods

let str:string="hello world"

//1. length of the string

console.log("length of the string",str.length)   // 11

//2. toUpperCase() & toLowerCase() - convert the string to upper case or lower case

console.log("upper case",str.toUpperCase())   // HELLO WORLD
console.log("lower case",str.toLowerCase())   // hello world

//3.charAt() - returns the character at a specified index in a string
//syntax : string.charAt(index)

console.log("character at index 4",str.charAt(4))   // o

//4.indexOf() - returns the index of the first occurrence of a specified value in a string
//syntax : string.indexOf(searchValue,fromIndex)  

console.log("index of 'world'",str.indexOf('world'))   // 4

//5. substring() - returns a part of the string between two specified indices
// ending index is not included in the result

console.log("substring from index 0 to 5 : ",str.substring(0,4))   // hell

//6. includes() - check whether a string contains a specified value or not
// returns a boolean value
//syntax : string.includes(searchValue,fromIndex)

console.log("does the string include 'world'?",str.includes('world'))   // true
console.log("does the string include 'hello'?",str.includes('HELLO'))   // false

//7. startsWith() & endsWith() - check whether a string starts or ends with a specified value
// returns a boolean value
//syntax : string.startsWith(searchValue,fromIndex) & string.endsWith(searchValue,length)

console.log("does the string start with 'hello'?",str.startsWith('h'))   // true
console.log("does the string end with 'world'?",str.endsWith('world'))   // true

//8.replace() - replaces a specified value with another value in a string
//syntax : string.replace(searchValue,newValue) 

console.log(str.replace('w','V'))
console.log(str.replace('hello','hi'))

//9. split() - break the string multiple parts base on the delimiter and return an array of strings
//syntax : string.split(delimiter)

let words = str.split(" ")

console.log(words)   // [ 'hello', 'world' ]

let str2 = str.split('o')

console.log(str2)   // [ 'hell', ' w', 'rld' ]
console.log(str2[1])   //  w

//10. trim(), trimStart(), trimEnd() - removes whitespace from both ends of a string, from the start of a string, and from the end of a string respectively

let fruit:string="   apple   "

console.log(fruit.trim());    // "apple"
console.log(fruit.trimStart()); // "apple   "
console.log(fruit.trimEnd());   // "   apple"

//11. concat() - combines two or more strings and returns a new string

let str3:string="hello"
let str4:string="world"
let str5:string="hi"

console.log(str3.concat(" ",str4))     // "hello world"

console.log("welcome".concat(" to Typescript"))   // "welcome to Typescript"

console.log(str3.concat(str4).concat(" ",str5))  // "helloworldhi"


// concepts of String immutability 

let num = 10

let res = num+5;
console.log(res)  // 15
console.log(num)  // 10  

// immutable means doesn't affect the original value, it creates a new value and returns it.

let str6:string="hello"

let res2 = str6.concat(" world")
console.log(res2)  // "hello world"
console.log(str6)  // "hello"


// multiline string using backticks only possible

let multiline = `welcome to
 Typescript`

 console.log(multiline)   // welcome to
                          // Typescript                   

              