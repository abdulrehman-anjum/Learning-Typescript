const enum SeatChoice { //if we dont write 'const' ts will generate alot of js code (ify functions??)
    AISLE = 23,    
    WINDOW = 78,    
    PROPELLER = "Attempted SUICIDE",
}

const harmfulAction = SeatChoice.PROPELLER
const fun = SeatChoice.WINDOW
console.log(harmfulAction);


export {}