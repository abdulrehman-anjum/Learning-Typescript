let rgb: [number, number, number] //this is very restrictive form of array called tuple.
// we cannot change the order, or add any other element or change the tpyes

rgb = [123,233,44] //correct
// rgb = [123,233,44, 13] //incorrect
// rgb = [123,233,"44"] //incorrect


let user: [string, number, boolean]
user = ['rehman', 87, true] //correct
// user = [087, 'rehman', true] //incorrect
// user = [087, 'rehman'] //incorrect'

//The Problem With Typescript Tuples
// you can override the values like this 
user[0] = 'ahmad'
//and you can also use all the methods of an array on this 
//so you can push new elements in it, and bypass the restriction
rgb.push(422) // so tuple in typescript not ideal to use?????

export {}