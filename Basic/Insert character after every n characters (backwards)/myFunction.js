// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b){
    const addItem = a.replace(/(?=(...)+$)/g, b)
    console.log(addItem)
     return a.replace(/(?=(...)+$)/g, b) 
     // change on ... the position you want to change/add
     // 3rd (...) => /(?=(...)+$)/g
     // 1st (.) => /(?=(.)+$)/g
     // 6th (......) => /(?=(......)+$)/g
}

//webpage solution let result = [];
//    let rest = a;
//    while (rest.length) {
//    	result.push(rest.slice(-3));
//    	rest = rest.slice(0, -3);
//    }
//    return result.reverse().join(b);

myFunction('1234567','.')
myFunction('abcde','$')
myFunction('zxyzxyzxyzxyzxyz','w')