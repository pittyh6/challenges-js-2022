// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a, b){
    let cleanA = ''
    let cleanB = ''
    let upperCaseA = ''
    let reverseB = ''

    if(a.includes('%') || b.includes('%')){
        cleanA = a.replace('%', '');
        cleanB = b.replace('%', '');

        upperCaseA = cleanA.charAt(0).toUpperCase() + cleanA.slice(1)

        reverseB = cleanB.split("").reverse().join("");

        console.log(upperCaseA + reverseB);
    }
    return (upperCaseA + reverseB)
}

myFunction('java', 'tpi%rcs')
myFunction('c%ountry', 'edis')
myFunction('down', 'nw%ot')


function myFunction2(a, b) {
    const func = x => x.replace('%','');
    const first = func(a);
    const second = func(b).split('').reverse().join('');
    return first.charAt(0).toUpperCase() + first.slice(1) + second;
  }