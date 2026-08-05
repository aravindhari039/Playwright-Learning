let a=1;                              // while loop
while(a<10){
    console.log(a);
    a++;
}
let b="";
console.log("----------");
                                       // do while loop
do {
    b+=a+" ";
    a++;
}while(a<15);
console.log(b);
                                       //for loop 
let c=[];
for (let i=0;i<10;i++){
    c.push(i+1);
}
console.log(c);                        //for of loop
                                    
let fruits=["apple", "guava","mango","banana"];
for(const fruit of fruits){
    console.log(fruit);
}
