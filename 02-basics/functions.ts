function addTwo(num: number): number {
    return num + 2
    // return "hello"  
}

function getValue(myVal: number)  { //it can return both hmmm because it uses any, 
    // is there a way to only allow these two, boolean and string... hmm????
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

function getUpper(val:string) {
    return val.toUpperCase()
}

addTwo(6)
getUpper("rehman")

function signUpUser(name:string, email:string, isPaid:boolean = false) {}

signUpUser("rehman", "rehm@n.n")

let myValue = addTwo(46)

//arrow fn
let getHello = (s: string): string => {
    return ""
}

const fruits = ["apple", "banana", "orange", "watermelon"]
fruits.map((fruit):string=>{
    return `fruit is ${fruit}`
})

//in this we want to return nothing USE void
function consoleError(errMsg:string): void {
    console.log(errMsg);
}
//in this we want to never return anything USE never,
//it is close to void but the documentation advise us to use never when intentionally stopping program flow
function handleError(errMsg:string): never {
    throw new Error(errMsg);
}

export {}