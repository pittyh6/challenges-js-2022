// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
function myFunction(arr){
    
    arr[0].b < arr[1].b ?  console.log(arr) : console.log(arr.reverse());

    // if(arr[0].b < arr[1].b){
    //     console.log(arr)
    // }else{
    //     console.log(arr.reverse())
    // }
    
    //The reverse() method reverses the order of the elements in an array.
    //The reverse() method overwrites the original array.
}

myFunction([{a:1,b:2},{a:5,b:4}])
//Expected [{a:1,b:2},{a:5,b:4}]
myFunction([{a:2,b:10},{a:5,b:4}])
//Expected [{a:5,b:4},{a:2,b:10}]
myFunction([{a:1,b:7},{a:2,b:1}])
//Expected[{a:2,b:1},{a:1,b:7}]