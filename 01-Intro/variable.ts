    // ***TYPES*** 
    //we dont need to specify a type of a variable always,
    //if we are assigning a value to it immediately, 
    //typescript automatically assign the correct type
// string
// let greetings: string = "Hello Rehman";
//OR
let greetings = "Hello Rehman";
greetings = "34"
console.log(greetings);

// number 
// let userId: number = 7897.79
//OR
let userId = 7897.79

//boolean
// let isLoggedIn: boolean = true
//OR
let isLoggedIn = true


// any
//it is not a type, it just turns off the typechecking, so any value is acceptable.
let hero:any;
function getHero(){
    return 11
}

hero = getHero()

export {}