// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str){
    const strSplit = str.split("")
    const strNew = [];
          
    for(let i = 0; i < strSplit.length; i++){
        const nextLetter = String.fromCharCode(strSplit[i].charCodeAt(strSplit[i])+1)
        console.log("nextLetter = " + nextLetter)
        strNew.push(nextLetter)
    }
    
    const text = strNew.join("") //without comman
    console.log("text = " + text)
    return text
}

myFunction('bnchmf')
myFunction('bgddrd')
myFunction('sdrshmf')