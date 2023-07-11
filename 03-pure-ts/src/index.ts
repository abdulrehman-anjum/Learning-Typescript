// class User {
//     //we need to tell the ts in advance about the type of constructor parameters
//     public name: string //we can or cannot write public, it doesnt matter, by default every public
//     private email: string //cannot access outside of this class
//     readonly city: string = "Springfield"
//     constructor(name:string, email: string){
//         this.name = name
//         this.email = email
//     }    
// }

//there is another way of writing classes that is shorter

class User {
    protected _courseCount: number = 1
    readonly city: string = "Springfield"
    constructor(
        public name:string, 
        private email: string
        ){
            //you dont need to write this.name or this.email in this syntax
    }

    //we can have methods in our class and they can be private too

    private deleteToken(){
        console.log('tooken deeeleted');   
    }

    //getter and setter methods
    //we use getter and setter to make our-
    //private methods and properties exposed to outside of class


    get getEmail(): string {
        return `this email is ${this.email}`
    }

    set setEmail(email: string){ //setter function should not have a return type
        console.log(`email updated`);        
    }

}

class SubClass extends User {
    //this class can use all the public and protected properties and methods of the parent class
    //but cant use the private properties and methods
    changeCouseCount(){
        this._courseCount = 14 //allowed because _courseCount is protected
        // this.email = "something@thing.com" //not allowed because email is private
    }

}


// i dont need to pass city (default value will be used) //"Springfield"
//since city is not required by constuctor.
const rehman = new User("rehman", "rehm@n.n") //city also added
// rehman.email //cant access because its private
// rehman.city = "Qouhog" //new value // it is read only now so cant change