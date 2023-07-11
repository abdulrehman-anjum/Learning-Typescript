"use strict";
//help in building well defined components that are reusable
//an example
//we want to make a function that can take any value type as parameter
//and then return that value type as well
//so, it is a generic function but returns the same type it takes as parameter
//this wont work because it can take these two but 
//there is no restriction that it will return the same data type
//we already use it in array
const names = [];
const score = [];
function identityOne(val) {
    return val;
}
identityOne("return boolean"); //takes string but return boolean *BAD*
//this also wont work because it can take any value 
//there is no restriction that it will return the same data type too
function identityTwo(val) {
    return val;
}
identityTwo("return number"); //takes string but return number *BAD*
//now to solve this we need to use generic type
//which enforces the same type everywhere
function identityThree(val) {
    return val;
}
//another short way to write it write T instead if Type
function identityFour(val) {
    return val;
}
identityFour(78); //take number and returns number
identityFour("78"); //take string and returns string
identityFour(true); //take boolean and returns boolean
//you dont need to specify datatypes for built in ts types but you can specify if you want like this
identityFour(76); //its valid but we dont have ts will automatically recognize its own types, 
//this ts wont recognize it automatically, because we want to use our custom type Bottle
identityFour({ brand: "COKE", price: 299 });
//its the same as writing this, we just define that type rules inside the <angle bracket>
identityFour({ brand: "COKE", price: 299 }); //still works, but it is not reusable :(
//how to define functions with generic array as parameter
//then we can put T[] to specify that it is a generic array, take any type in array, then return type is also 
function getSearchResults(products) {
    //we can also put <T,> instead of <T> that is also valid and good to differectiate bw react component tags
    const myIndex = 3;
    return products[myIndex];
    // return 3 //cant return number because the return type is also same as input so we have to return product[index] 
}
// we can also put <T,>, lets see an arrow fn
const getMoreSearchResults = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
//more than one generic inputs type like <T, V> instead <T> only , n mumber of values
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction("anjum", 21);
//more than one generic inputs type like <T, V> instead <T> only , n mumber of values
// function someOtherFunction<T,>(valOne: T, valTwo: Database): object { //this and that line under, its the same thing
// OR
function someOtherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
someOtherFunction("anjum", {
    connection: "local",
    username: "rehman"
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
//now we use this generic class to represent two data types that both can use cart
const sellableQuiz = new Sellable();
const sellableCourse = new Sellable();
sellableQuiz.addToCart({ name: "CH-3", duration: 30 });
sellableCourse.addToCart({ name: "Speed", author: "rehman", subject: "phyics" });
