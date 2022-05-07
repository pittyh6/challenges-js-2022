// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr){
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum = (sum + arr[i])        
    }
    console.log(sum/ arr.length)
    return (sum / arr.length)
}


myFunction([10,100,40])
//Expected50
myFunction([10,100,1000])
//Expected370
myFunction([-50,0,50,200])
//Expected50