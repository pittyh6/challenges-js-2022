// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function myFunction(...arrays){
    
    console.log(arguments)
    console.log(arguments.length)
    let result = []
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i] + ','
    }
    
    console.log(result)
    return result
}

//arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
//The arguments object is useful for functions called with more arguments than they are formally declared to accept. This technique is useful for functions that can be passed a variable number of arguments, such as Math.min(). 
//###You can use arguments.length to count how many arguments the function was called with. If you instead want to count how many parameters a function is declared to accept, inspect that function's length property.

myFunction([1, 2, 3], [4, 5, 6])
//Expected [1, 2, 3, 4, 5, 6]
myFunction(['a', 'b', 'c'], [4, 5, 6])
//Expected ['a', 'b', 'c', 4, 5, 6]
myFunction([true, true], [1, 2], ['a', 'b'])
//Expected [true, true, 1, 2, 'a', 'b']