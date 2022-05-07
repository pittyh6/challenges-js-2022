// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a){ // first way to resolve   
    let countNeg = 0
    for(let i = 0; i < a.length; i++){
        if(a[i] < 0){
            countNeg++
        }
    }
    console.log("negative qtd= " + countNeg)
    return countNeg
}

function myFunction2(a){// first way to resolve   with filter
    let countNeg = 0
    const result = a.filter( function(number){        
        if(number<0){
            countNeg ++;
        }
    })
    console.log("result "  + countNeg)
    return countNeg
}

myFunction([1,-2,2,-4])
//Expected2
myFunction([0,9,1])
//Expected0
myFunction([4,-3,2,1,0])
//Expected1