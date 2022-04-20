// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction1(a, b){
     if(b.length <=2){
        console.log(b + a)
     }else{
         console.log(a + b)
     }
}

myFunction1('cheese', 'cake')
myFunction1('lips', 's')
myFunction1('Java', 'script')
myFunction1(' think, therefore I am', 'I')
myFunction1(' hope', 'My')

// Answer webSite... 
function myFunction(a, b) {
    console.log(a.indexOf(b) === -1 ? a + b : b + a)
}
myFunction('cheese', 'cake')
myFunction('lips', 's')
myFunction('Java', 'script') 
myFunction(' think, therefore I am', 'I')
myFunction(' hope', 'My')