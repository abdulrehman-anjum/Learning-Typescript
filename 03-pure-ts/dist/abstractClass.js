"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //complex calculations
        return 7;
    }
}
// const ar = new TakePhoto("test", 'Test') //ERROR bcs abstract classes cant have objects
//we need to extend TakePhoto class from 
//another normal class to make objects 
//and use that class properties and methods
class Snapchat extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    //we defined abstract method here 
    getSepia() {
        console.log('sepia');
    }
}
const ar = new Snapchat('front camera', 'hdr+', 3); //allowed because its not directly an abstract class
ar.getReelTime; //already defined so we can use it 
