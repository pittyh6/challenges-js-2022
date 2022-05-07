// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array
function myFunction(a){
    console.log(a.splice(a.length-3,a.length+3));
    return a.splice(a.length-3,a.length+3)
}

myFunction([1,2,3,4])
//Expected[2,3,4]
myFunction([5,4,3,2,1,0])
//Expected[2,1,0]
myFunction([99,1,1])
//Expected[99,1,1]
myFunction([99,1,1,4,3,2,1,0])