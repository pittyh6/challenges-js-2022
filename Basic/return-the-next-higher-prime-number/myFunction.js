// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
function myFunction(a){
  console.log("AAAA == " + a)
  if(a<2){
    console.log("FALSE = a<2 "+ a)
    return false;
  }else if(a >1 && a<4){
    console.log("TRUE = a >1 && a<4 "+ a)
    return a;
  }

  let root = Math.ceil(Math.sqrt(a))
  console.log("root = " + root)
  for(let i = 2; i <=root; i++){
    if(a % i === 0){
      console.log("for if -> false " + i + " a= " +a)
      return false;
    }
  }
  
  console.log("TRUEEEEE")
  return a;  

}

myFunction(38)
myFunction(7)
myFunction(115)
myFunction(2000)
myFunction(2)
myFunction(121)