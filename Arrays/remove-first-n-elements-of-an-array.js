// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction(a){

    // ***The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
    console.log(a.splice(3,a.length));
    return a.splice(3,a.length)
}
myFunction([1,2,3,4])
//Expected[4]
myFunction([5,4,3,2,1,0])
//Expected[2,1,0]
myFunction([99,1,1])
//Expected []