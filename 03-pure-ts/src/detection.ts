//NARROWING 
//cover all the cases of unknown datatypes
//so our code behaves like we intended

//typeof keyword AKA 'type guard' :D

function detectType(val: string | number) {
    //we need to be extra cautious when dealing with multiple types
    //like val could be string or number , so it is appreciated that we have 'type guards'
    if (typeof val === "string"){ //now we are certain that it is not a number because of typepf keyword or "type guard"
        return val.toLowerCase 
    }
    return val + 4 //now here we know that it will be always a number if ever reach here
}

function provideId(id: string | null){
    if (!id) {
        console.log("please provide an id");
        return //now here id was null always, so we handled it like this         
    }
    id.toLowerCase
}

//IMPORTANT EXAMPLE
function printAll(strs: string | string [] | null) {
    // it might look like we checked for all things but there are still cases we havent covered yet
    // what if the string is empty and other stuff so that is a little bit of problem, nothing much
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);            
        }
    }
}

//'in' operator
// we can use it to check whether a property exist in a interface or anything or not 

interface User {
    name: string,
    username: string,
}

interface Admin {
    name: string
    username: string
    isAdmin: boolean
}

function checkAdmin(account: User | Admin) {
    if ("isAdmin" in account) { //now we are 100% sure that this account is Admin because of 'in' keyword
        return account.isAdmin
    }
}


//'instanceof' keyword: it checks whether some variable is an instance of a class like
// const date = new Date //date is the instance of the Date 
// date instanceof Date // returns true
// instanceof can only be used where there is potential of a 'new' keyword like in the date

function logValue(x: Date | string) {
    if (x instanceof Date){
        console.log(x.toUTCString); //here it is a Date istance
    } else {
        console.log(x.toUpperCase); //here its a string        
    }
}


//'as' keyword and 'is' keyword

type Fish = {swim: ()=> void}
type Bird = {fly: ()=> void}

//weird syntax but it return true it means it is fish 
function isFish(pet: Bird | Fish): pet is Fish { //we need to typecast it, if it return true, it 100% means it is a fish
    //so this will only return true or false based on pet as fish condition
   return (pet as Fish).swim !== undefined //so we are saying that if fish has swim method and the result is not undefined, then it means it is a fish, because swim exist on it
}

function getFood (pet: Fish | Bird) {
    if (isFish(pet)){
        pet //it is 100% a fish here because of typecasting, otherwise it would return true which will not mean anything whether it is a fish or bird
        return 'fish food'
    } else {
        pet //it is 100% a Bird here because of typecasting, otherwise it would return true which will not mean anything whether it is a fish or bird
        return 'bird food'
    }
}


//narrowing using unions
interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle"
    length: number
    width: number
}


type Shape = Circle | Square | Rectangle

//this method is not that good but still works,
//there is a better method called exhaustive checking using 'never' keyword
//discriminated unions

function getTrueShape(shape: Shape){
    if (shape.kind === 'circle'){
        //now we know the kind of shape is a circle 
        return Math.PI * shape.radius **2
    }
    // return shape.side* shape.side
    //here it was a square as long as there were only two types Circle and Square
    //but if we add anyting else in the shape type like a Rectangle 
    //then it will again be confused so 
    //better to use exaustive checking using switch case and never keyword
}

//Better Use Exhaustive Checking

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius **2
        case "square":
            return shape.side* shape.side
        case "rectangle":
            return shape.length * shape.width
        //we can use a default case and use the never keyword 
        //which will tell us whenever some type is missing in our exhaustive checking 
        //unlike the previous method which was confused which type it is 
        default: // thi will give us error until we check for every type above 
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}