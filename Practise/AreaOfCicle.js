let r = 7;
//let pi = 3.14 , as pi value is constant we are making a constant
const pi = 3.14;
let area = pi * r * r;
console.log(area);
//pi = 3.67;//This line would throw an error saying, Assignment to constant variable
r = 14;
area = pi * r * r;
console.log(area);