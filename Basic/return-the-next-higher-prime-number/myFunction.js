// Write a function that takes a number (a) as argument
// This challenge is a little bit more complex
// If not, return the next higher prime number
// If a is prime, return a

function myFunction(a){
  let resultCount = false;  
  if(a<2){    
    for(let count = a+1; resultCount !== true; count++){
      myFunction(count)
      resultCount = true
      a = count
      break
    }
  }else if(a >=2 && a<4){
    console.log("value 2 = " + a)
    return a;
    
  }  
  let root = Math.ceil(Math.sqrt(a))
  for(let i = 2; i <=root; i++){
    if(a % i === 0){
      for(let count = a+1; resultCount !== true; count++){
        myFunction(count)
        resultCount = true
        return count
      }
    }
  }
  
  console.log("TRUEEEEE")
  console.log("A final= " + a)
  return a;  
}
myFunction(1)
myFunction(38)
myFunction(7)
myFunction(115)
myFunction(2000)
myFunction(2)
myFunction(50)
myFunction(938)