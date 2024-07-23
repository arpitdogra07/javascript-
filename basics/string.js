const name ="Arpit "
const repo = 50
//console.log(`My name is ${name} and my repo is ${repo}`)  // here we use backtics and string manupulation will be their


const gamename = new String('Arpit Dogra')
//console.log(gamename[0]);
//console.log(gamename[1]);

//console.log(gamename.__proto__)  // it will give mainly the object
//console.log(gamename.toUpperCase())  // it will uppercase the string letters
//console.log(gamename.toLowerCase())// it will lowercase the letters
//console.log(gamename.charAt(3)) // In this index which character is available
//console.log(gamename.substring(0,5))  // it will mainly print the substring

const anotherstring =gamename.slice(-2,4)
//console.log(anotherstring)         //we can use negative value in slice not in substring because it will ignore that value in substring

const newstring = "   Arpit Dogra "
//console.log(newstring)
//console.log(newstring.trim()) // it mainly trim the space between the different letters or words

const url = "http//arpit07@gmail.com"
console.log(url.replace("." ,'-'))
console.log(url)

console.log(url.includes('arpit'))  // it mainly checks that particular string value is available in string or not
console.log(gamename.split('-'));







