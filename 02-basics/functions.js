"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"  
}
function getValue(myVal) {
    // is there a way to only allow these two, boolean and string... hmm????
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
function getUpper(val) {
    return val.toUpperCase();
}
addTwo(6);
getUpper("rehman");
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signUpUser("rehman", "rehm@n.n");
var myValue = addTwo(46);
//arrow fn
var getHello = function (s) {
    return "";
};
var fruits = ["apple", "banana", "orange", "watermelon"];
fruits.map(function (fruit) {
    return "fruit is ".concat(fruit);
});
//in this we want to return nothing USE void
function consoleError(errMsg) {
    console.log(errMsg);
}
//in this we want to never return anything USE never,
//it is close to void but the documentation advise us to use never when intentionally stopping program flow
function handleError(errMsg) {
    throw new Error(errMsg);
}
