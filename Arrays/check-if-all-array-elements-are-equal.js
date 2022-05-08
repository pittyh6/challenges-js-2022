// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
function myFunction1(arr){
    let result = true
    for(let i=0; i< arr.length-1; i++){
        if(arr[i] === arr[i+1]){
            result = true
        }else{
            result = false
            break
        }
    }
    console.log("result = " + result)
    return result
}

function myFunction2(arr){
    let result = true
    for(let i=0; i< arr.length-1; i++){
        if(arr[i] !== arr[i+1]){
            result = false
            break
        }else{
            result = true            
        }
    }
    console.log("result = " + result)
    return result
}

function myFunction(arr){
    let result = (currentValue) => currentValue === arr[0]
    console.log( "result = " + arr.every(result)) 
    return arr.every(result)
    //The every() method tests whether all elements in the array pass the test implemented by the provided function. 
    //It returns a Boolean value.
}

myFunction([true, true, true, true])
//Expected true 
myFunction(['test', 'test', 'test'])
// //Expected true 
myFunction([1,1,1,2])
// //Expected false 
myFunction(['10',10,10,10])
// //Expected false 