// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction(a){
    console.log(Math.round((a + Number.EPSILON) * 100) / 100)    
}

myFunction(2.12397)
myFunction(3.136)
myFunction(1.12397)
myFunction(26.1379)