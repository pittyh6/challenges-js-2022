// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b)
{
   console.log(b.split(a).length-1) 
}

myFunction('m', 'how many times does the character occur in this sentence?')
myFunction('h', 'how many times does the character occur in this sentence?')
myFunction('?', 'how many times does the character occur in this sentence?')
myFunction('z', 'how many times does the character occur in this sentence?')