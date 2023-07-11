let score: number | string = 22 //use it as strictly as possible

score = 78
score = "79"

type User = {
    name: string
    isActive: boolean
}

type Admin = {
    username: string
    id: number
}

let newUser: User | Admin = {username: "rehman", id: 3435}

newUser = {name: "rehman", isActive: true}


function getId(id: string | number){
    console.log(`the id is ${id}`);    
}
getId(4657)
getId("23")

function getById(id: string | number){
    if (typeof id === "string") { //we need to make sure the id we are recieving is string to use that method
        id.toUpperCase()
    }
    // id.toUpperCase() //dont work bcs it could be number or string 
}

//arrays

const data: number[] = [1, 2, 3, 4]
const data2: string[] = ['1', '2', '3', '4']

const data3: string[] | number[] = [1, 2, 3] //this is wrong, it will do either one, not mix types

const data4: (string | number)[] = [1, 2, '3'] // mix types

//literal assignment --very strict
let pi:3.14 = 3.14 //we cannnot assign pi any other value other than the value 3.14 specified as type
// pi = 74 // this is wrong 
// let sky:"Blue" = "Green"; //we can only assign blue not green 

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = 'window' //this is acceptable
// seatAllotment = 'crew' //this is not acceptable bcs its not defined


export {}