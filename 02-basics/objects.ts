// const  User = {
//     name: "Rehman",
//     email: "rehm@n.n",
//     isActive: true
// }

// // function createUser({name: string, isPaid: boolean}){}

// // let newUser = {name: "Rehman", isPaid: true, isNew: false}

// // createUser(newUser) //why are we able to pass isNew in this, when it is not even defined 


// // function createCourse():{name: string, price: number}{
// //     return {name: "Reactjs", price: 666}
// // }

// // type alias
// //using this you can create your own custom types like string, number.. like this
// type MyUser = {
//     name: string;
//     email: string;
//     isActive: boolean
// }
// //then use that to infer your custom made type in your functions or variables
// function createUser(user: MyUser): MyUser{
//     return {name: "", email: "", isActive: true}
// }
// // createUser(User)
// // OR
// createUser({name: "Rehman", email: "rehm@n.n", isActive: false})

type MyUser = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardNumber?: number
}

let User: MyUser = {
    _id: "12313",
    name: "rehman",
    email: "rehm@n.n",
    isActive: true,
    // creditCardNumber: 3423423
}

User.email = "232"
// User._id = "r3r3r" //not allowed bcs readonly property


type CardNumber = {
    cardnumber: number;
}

type CardDate = {
    date: string
}

type CardDetails = CardNumber & CardDate & { ccv: string }

let myCard: CardDetails = {
    cardnumber: 232323,
    date: "may 05",
    ccv: "1r3"
}


export {}