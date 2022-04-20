// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b){
    // if(a < b){
    //     console.log(a/b)
    // }else{
    //     console.log(a*b)
    // }
    console.log(a < b ? a / b : a * b)
}

myFunction(10, 100)
myFunction(90, 45)
myFunction(8, 20)
myFunction(2, 0.5)