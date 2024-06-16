console.log(2+2)

num = 2+2 // We can define a variable directly without mentioning the type

let num1 = 32 //In later version let was introduced for declaration

//let num1 = 33// This would give an error saying num1 has already been declared. Hence in order to change the value of a variable we need to skip let

num1 = 33

console.log(num)

console.log(num1)

let username = "Venkat"//We can use either double qoutes or single qoutes while defining a string
let username2 = 'Sai'
let qoutes = '"Hey there"'

console.log(username)

console.log(username+" "+username2+' says '+ qoutes)

let r = 7
// const epislon // We must initialize a constant
const pi = 3.14 // This will make the pi constant and you cannot alter its value later in code
let area = pi * r * r
//pi = 3.14422 - This will throw an error as it is a constant we cannot do assignment
console.log(area)