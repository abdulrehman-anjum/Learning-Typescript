//two ways to define the type of arrays
let superHeroes: Array<string> = []
//OR
// let superHeroes: string[] = [] //this is also same thing

superHeroes.push("superman")


type MyUser = {
    name: string
    isActive?: boolean
}

const allUsers: MyUser[] = []
allUsers.push({name: "rehman"})

//array of array
const MLModels: number[][] = [
    [255, 120, 154], [31, 123, 122]
]



export {}