// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction(a){
    var digits = a.toString().split('') //["1", "0"]
    var realDig = digits.map(Number) //[1,0]
    console.log(realDig)
}

myFunction(10)
myFunction(931)
myFunction(193278)
