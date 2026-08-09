
// while loop        <--------------------

/* 
 while(condition)
 {
     //statements
 }

*/

/*
let i=1

while(i<=5)
{
    console.log(i," ");
    i++;
} */


//  do-while loop    <---------------------

/* 
 do
 {
    //statements
 }
 while(condition);

*/

/* 
let i=10;

do
{
   console.log(i);
   i++
}
while(i<=5);

console.log("Current value of i",i); */

/* 
let i=10;

do
{
  console.log(i);
  i--
}
while(i>=1); */

// For Loop       <--------------------

/* 
 for (inilization; condition; inc/dec)
 {
    // statements;
 }

*/

 
for(let i=1; i<=10; i++)
{
    if(i%2==0)
        console.log(i);
} 

/* 
let i:number;

for(i=1; i<=5; i++)      here we will assign the value to i   & we are not using "let"
{                        i is gobal variable here
    console.log(i); // 1...5
}

console.log(i);  //6 */

/* 
let i:number;

for(i=1; i<=5; i++);

console.log(i);    //6 */

// break    <-------------------

 
let i=10;

for(let i=1; i<=10; i++)
{
    if(i==6)
    {
        break;
    }
    console.log(i);
}

console.log(i); 

// continue     <---------------------

 
for(let i=1; i<=10; i++)
{
    if(i==3 || i==5 || i==7)    
        continue;
    console.log(i);   // 1 2 4 6 8 9 10
} 

let names:String[]=["john","scott","hari","james"]

for(let i in names)
{
    console.log(names[i])
}