// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function myFunction(arr){
    console.log(arr.sort().reverse());
    return arr.sort().reverse()
}

myFunction([1,3,2])
//Expected[3,2,1]
myFunction([4,2,3,1])
//Expected [4,3,2,1]