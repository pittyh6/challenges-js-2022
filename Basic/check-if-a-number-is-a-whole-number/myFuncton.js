// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a){
    console.log(a % 1 === 0)
}

myFunction(4)
myFunction(1.123)
myFunction(1048)
myFunction(10.48)