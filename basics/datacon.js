let score = "Arpit"
console.log(typeof(score));
console.log(typeof score);  //it show it as a string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)       // it will show a number 
console.log(valueInNumber)     //it shows NAN disadvantage in js


//if score is put null it shows 0
console.log(valueInNumber)  

//if score value is undefined it shows NAN
console.log(valueInNumber)  

//if score value is string which cant convert eg "Arpit" again it shows output NAN
console.log(valueInNumber)  

let someNumber =  33;
let stringNumber = String(someNumber)
console.log(stringNumber)

