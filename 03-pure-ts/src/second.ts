// // implementation of interface 
// //used as guidelines and bring consistency in our code
// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }

// interface Story {
//     createStory(): void
// }

// class Instagram implements TakePhoto, Story { //we will have to follow the restrictions of the all the interfaces
//     constructor( //methods not allowed in constructor???????
//         public cameraMode:string,
//         public filter:string,
//         public burst: number
//     ){}

//     createStory(): void {
//         console.log('story created');
        
//     }
// }

// class Youtube implements TakePhoto {//implement keyword used for interfaces
//     constructor(
//         public cameraMode:string,
//         public filter:string,
//         public burst: number,
//         public short: string //we can add more properties than the ones defined in the interface
//     ){}
// }