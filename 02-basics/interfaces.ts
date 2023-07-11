//interface is like type but it support re-opening✨ to add more properties
//while type use & sign to use inheretence, interface is using extends keyword.

interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string //optional because ? sign
    //other than the properties, interface also allows methods, TWO WAYS OF WRITING METHODS
    // startTrial: () => string //fn returns string
    startTrial(): string // same thing as above, just different way of writing it
    getCoupon(couponnumber: number, couponname: string): number
}
//now that user interface above could be imported from another file 
//and it dont have a property that we want
//in the case, we can 
//add more properties to this interface 
//OR 
//Interview people like to call it ✨"re-opening of the interface"✨ like this

interface User {
    githubToken: string 
}

//we can also do inheretence with that interface using extends keyword
//if you want to extend more than one interfaces 
//interface Admin extends User, Person {} //extends more than one but we only have User so..
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const rehman: Admin = {
    dbId: 33, email: 'rehm@n.n', userId: 3, githubToken: 'github', role: "admin",
    startTrial: ()=>{
        return "trial started"
    },
    getCoupon: (number: 34, name: "rehman")=>{ //parameters name dont need to be same as defined in the interface, just datatype is same
        return 50
    }
}

// const rehman: User = {
//     dbId: 33, email: 'rehm@n.n', userId: 3, githubToken: 'github',
//     startTrial: ()=>{
//         return "trial started"
//     },
//     getCoupon: (number: 34, name: "rehman")=>{ //parameters name dont need to be same as defined in the interface, just datatype is same
//         return 50
//     }
// }