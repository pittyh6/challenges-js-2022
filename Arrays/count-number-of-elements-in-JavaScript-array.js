// Write a function that takes an array (a) as argument
// Return the number of elements in a
function myFunction(a){
    console.log(a.length)
    return a.length
}

myFunction([1,2,2,4])
//Expected4
myFunction([9,9,9])
//Expected3
myFunction([4,3,2,1,0])
//Expected5