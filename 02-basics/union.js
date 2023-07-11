"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 22; //use it as strictly as possible
score = 78;
score = "79";
var newUser = { username: "rehman", id: 3435 };
newUser = { name: "rehman", isActive: true };
function getId(id) {
    console.log("the id is ".concat(id));
}
getId(4657);
getId("23");
function getById(id) {
    if (typeof id === "string") { //we need to make sure the id we are recieving is string to use that method
        id.toUpperCase();
    }
    // id.toUpperCase() //dont work bcs it could be number or string 
}
