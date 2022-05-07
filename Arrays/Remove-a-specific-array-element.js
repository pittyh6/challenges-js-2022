// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function myFunction(a, b){
    for(let i = 0; i < a.length; i++){
        if(a[i] === b){
            a.splice(i,1)
            i--     //As the items are removed from the array the index still increments and the next item after your matched value is skipped.
                    //The simple solution is to modify the above example to decrement the index variable so it does not skip the next item in the array.     
        }       
    }
    console.log("result = " + a)
    return a
}

myFunction([1,2,3], 2)
//Expected[1, 3]
myFunction([1,2,'2'], '2')
//Expected[1, 2]
myFunction([false,'2',1], false)
//Expected['2', 1]
myFunction([1,2,'2',1,1,2,1], 1)
//Expected[2, '2']