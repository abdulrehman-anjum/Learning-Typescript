"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ***TYPES*** 
//we dont need to specify a type of a variable always,
//if we are assigning a value to it immediately, 
//typescript automatically assign the correct type
// string
// let greetings: string = "Hello Rehman";
//OR
var greetings = "Hello Rehman";
greetings = "34";
console.log(greetings);
// number 
// let userId: number = 7897.79
//OR
var userId = 7897.79;
//boolean
// let isLoggedIn: boolean = true
//OR
var isLoggedIn = true;
// any
//it is not a type, it just turns off the typechecking, so any value is acceptable.
var hero;
function getHero() {
    return 11;
}
hero = getHero();
