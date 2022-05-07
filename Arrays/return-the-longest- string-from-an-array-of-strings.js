// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction1(arr){
    var longest = arr.sort(function(a,b){
        return b.length - a.length;
    })[0]
    console.log(longest)
    return longest
}


//The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element. 
//The final result of running the reducer across all elements of the array is a single value.
function myFunction(arr){  //
    var longest = arr.reduce(function(a,b){
        return a.length > b.length ? a : b
    })
    console.log(longest)
}


myFunction(['help', 'me'])
//Expected'help'
myFunction(['I', 'need', 'candy', 'he'])
//Expected'candy'