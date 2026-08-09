
//============== forEach(), map(), filter(), reduce(), some(), every() ==================

//1. forEach() -execute a provided function once for each array element
// It takes function as a parameter 

//syntax : array.forEach(function(currentValue, index, array){})

//currentvalue - The current element being processed in the array.
//index(optional) - The index of the current element being processed in the array.
//array(optional) - The array the element belongs to.

export{}

//eg 1: index

let fruits:string[]=["apple","banana","mango","grapes","orange"]

console.log("print using nor for in")

for(let i in fruits)
{
    console.log(fruits[i])   // apple banana mango grapes orange
}

//------------------------------------------------------------------------------------

console.log("print using forEach()")

fruits.forEach(function(elements,index){

    console.log(`${index} : ${elements}`)
})

//arrow function 

fruits.forEach((element,index)=>{

    console.log(`${element} , ${index}`)   // apple banana mango grapes orange
})

fruits.forEach((element)=>{

    console.log(element.toUpperCase())
})

//2. map() - create a new array with the result of calling function on every element in the array
// it also takes function as a parameter
// returns a new array of the same length as the original array

//syntax : array.map(function(currentValue, index, array){})        return type--- is mandatory

let numbers:number[]=[1,2,3,4,5]

let squared = numbers.map(function(elements){
    return (elements*elements)
})

console.log(squared);  // [1,4,9,16,25]
console.log(numbers);

//------------------------------------------------------------------------------------

// arrow function

let num:number[]=[1,2,3,4,5]

let doubled = num.map((elements)=>elements+elements)    // return type is optional because it have only one return statement

console.log(doubled);  // [2,4,6,8,10]
//  console.log(num);      // [1,2,3,4,5]

//3. filter() - create a new array with all elements that pass/satisfy the condition specified in the provided function.
//it also takes function as a parameter
//return either same or fewer elements than the original array

//syntax : array.filter(function(currentValue, index, array){})       

let even =num.filter(function(ele){

    return (ele%2==0)

})

console.log(even);

//-------------------------------------------------

// printing greater than three(3)

let greater= num.filter((ele)=>ele>3)

console.log(greater);

//4. reduce ()- applies a function to the all elemnents in the array and return a single value

//syntax : array.reduce(function(accumulator, currentValue, index, array){}, initialValue)   ---> initial value for accumulator and also its optional

let added =num.reduce(function(total,ele){
    return (total+ele)
},0)   //here 0 is optional for accumulator

console.log(added);  // 15

// arrow function

let add=num.reduce((total,ele)=>total+ele,1)

console.log(add);  // 16

//5. some() - check if any element satisfied the codition
// returns "true" if any element satisfies the condition otherwise returns "false"

//syntax : array.some(function(currentValue, index, array){})

let check =num.some(function(ele){

    return (ele<0)
})

console.log("isNegative",check);  // false

let isPositive = num.some((ele)=>ele>0)

console.log("isPositive",isPositive);  // true

//6. every() - check if all elements satisfied the codition
// returns "true" if all elements satisfies the condition otherwise returns "false"

//syntax : array.every(function(currentValue, index, array){})

let allEven = num.every(function(ele){

    return (ele%2 ==0)
})

console.log("allEven",allEven);  // false

//-------------------------------------------------------

let iseven:number[]=[2,4,6,8,10]

let allEven1= iseven.every((ele)=>ele%2==0)

console.log("allEven1",allEven1);  // true
