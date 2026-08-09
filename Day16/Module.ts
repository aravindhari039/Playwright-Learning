
// this important for automation of code reuseability

// must use "export" for properties and methods 

export let appname:string="vs code"

export function add(a:number,b:number):number{
    return a+b;
}

export class Example{

    static toUpper(str:string):string{
        return str.toUpperCase();
    }
}