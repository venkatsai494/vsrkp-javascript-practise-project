/*
Number, String (even this), Boolean, null, undefined, symbol are primitive data types in javascript
*/
//number includes everything including floating point number and also range is very big

let n = 8
let hdn = 0xff //This is hexadecimal number
let dn = 1.5e12//This is 10 to the power of 12
let username = "Venkat"
let big = 19302984984224422443348384
let bign = 2322923023929839249249249n//in order to retain the precision we need n at the end. it is called BigInt
console.log(hdn)
console.log(dn)
console.log(typeof n)
console.log(typeof username)// typeof would tell what type of datatype that particular variable is
console.log(Number.MAX_VALUE)//This would give max integer it can accomodate
console.log(Number.MAX_VALUE*10)//This would lead to infinity
console.log(big)//we will lose the precision of the big integers
console.log(bign)
//console.log(bign+2)//This would lead to an error as we are combining normal int with bigint
console.log(bign+2n)
