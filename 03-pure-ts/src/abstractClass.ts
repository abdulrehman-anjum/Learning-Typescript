abstract class TakePhoto { //cannot create objects on their own
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    //we need to write abstract here because 
    //we dont want to immedietely provide definition for it
    //it can be defined later
    abstract getSepia(): void 
    getReelTime(): number{
        //complex calculations
        return 7
    }
}

// const ar = new TakePhoto("test", 'Test') //ERROR bcs abstract classes cant have objects

//we need to extend TakePhoto class from 
//another normal class to make objects 
//and use that class properties and methods
class Snapchat extends TakePhoto { //you can take TakePhoto properties
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }    

    //we defined abstract method here 
    getSepia(): void {
        console.log('sepia');
        
    }

}

const ar = new Snapchat('front camera', 'hdr+', 3) //allowed because its not directly an abstract class

ar.getReelTime //already defined so we can use it 