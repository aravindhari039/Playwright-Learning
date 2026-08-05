function print(){
    console.log("Welcome to JavaScript");
}
print();
                            // Parameters function
function num(a){
    console.log(a+" age");
}
num(25);
                           // return function
function mul(a,b){
    return a*b;
}
let result=mul(5,4);
console.log(result);
                           // without return function
function add(a,b){
console.log(a+b);
}

let res=add(5,6);
console.log(res);

function printbrowser(){

    let browsers=["Chrome","Firefox","Edge","Opera"];
    for (const browser of browsers){
        console.log(browser);
    }
}
printbrowser();