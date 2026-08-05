
//1. push() - Add single /multiple elements at the end of an array
//syntax : array.push(element1,....,elementN)

let numbers :number[]=[1,2,3,4,5]

console.log(numbers)
/* 
numbers.push(6)

console.log(numbers)

numbers.push(7,8,9)
console.log(numbers) */

//2. pop() - remove the last element of an array
//syntax : array.pop()
/* 
numbers.pop()
console.log("after pop",numbers) */

//3. shift() - remove the first element of an array
//syntax : array.shift()
/* 
let removed_element=numbers.shift()
console.log("after shift",numbers) 
console.log("removed element",removed_element)  */

//4. unshift() - add single/multiple elements at the beginning of an array
//syntax : array.unshift(element1,....,elementN)
/* 
numbers.unshift(0)
console.log("after unshift",numbers)
numbers.unshift(-2,-1)
console.log("after unshift",numbers) */

//5. concat() - merge two or more arrays
//syntax : array1.concat(array2,array3,...,arrayN)
/* 
let combined_array=numbers.concat([6,7,8],[9,10])     // concat only same type is possible
console.log("after concat",combined_array) */

//6. slice() - Extract a section of an array and returns a new array
//syntax : array.slice(start_index,end_index)
/* 
let fruits:string[]=["apple","banana","mango","grapes","orange"]

let sliced_array=fruits.slice(1,4)       //      1         2          3         4- index won't take
console.log("after slice",sliced_array)  // [ 'banana', 'mango', 'grapes' ] */

//7. splice() - Add/Remove elements from an array
//syntax : array.splice(start_index,delete_count,element1,element2,...,elementN)

// let fruits:string[]=["apple","banana","mango","grapes","orange"]
/* 
let removed =fruits.splice(2,1);        // 2 is starting index , 1 is delete count-how many elements we want to delete 

//ex 1:
console.log("after splice",fruits)      //[ 'apple', 'banana', 'grapes', 'orange' ]
console.log("removed elements",removed)   //[ 'mango' ]

//ex2:
fruits.splice(2,0,"kiwi","papaya")    
console.log("after splice",fruits)      //[ 'apple', 'banana', 'kiwi', 'papaya', 'grapes', 'orange' ]

//ex3:
fruits.splice(2,2,'mango','cherry')
console.log("after splice",fruits)      //[ 'apple', 'banana', 'mango', 'cherry', 'grapes', 'orange' ] */

//8. indexOf() - find the index of an element in an array , if elemnt is not found it will return -1
//syntax : array.indexOf(searchElement) or array.indexOf(searchElement,StartingIndex)
 
let fruits:string[]=["apple","banana","mango","grapes","orange"]
/* 
let index=fruits.indexOf("grapes")
console.log("index of grapes",index)     // 3

console.log("index of kiwi",fruits.indexOf("kiwi"))    // -1

console.log("index of grapes from index 2",fruits.indexOf("grapes",2))    // 3 */

//9.includes() - check whether an element is present in an array or not    -- return boolean value
//syntax : array.includes(searchElement) or array.includes(searchElement,StartingIndex)
 /* 
console.log("is mango present",fruits.includes("mango"))    // true
console.log("is kiwi present",fruits.includes("kiwi"))      // false
console.log("is grapes present from index 4",fruits.includes("grapes",4))    // false
console.log("is grpaes present from index 2",fruits.includes("grapes",2))    // true */

//10.toString() - convert an array to string
//syntax : array.toString()

console.log(numbers);   //[ 1, 2, 3, 4, 5 ]

let ss=numbers.toString();
console.log("after toString",ss)    // after toString 1,2,3,4,5

let myarray:String[]=['a',"b","c","d"]
console.log("myarray",myarray.toString())


//============== forEach(), map(), filter(), reduce(), some(), every() ==================