// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
function myFunction(x, y){

    if(x % y === 0){
        console.log("x = " + x)
        return x
    }else{
        let count = x + 1
        while(count % y !==0){
            x = count +1
            count++;  
        }           
    }
    console.log("count = " + x)
    return x

    ////////////////////////////////
    // while(x % y !==0){
    //     x++
    // }
    // console.log("x = " + x)
    // return x
}
myFunction(1, 23)
myFunction(23, 23)
myFunction(7, 3)
myFunction(-5, 7)