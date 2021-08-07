const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr =[]
    let pats =[]
    let array= arr.concat(expr)
    let morzeCode = array.map(element =>{
    
        pats =  element.split(/(.{10})/).filter(O=>O)
     
         for(let i=0; i < pats.length; i++) {
            pats[i] = pats[i].replace(/11/gm, '-')
            pats[i] = pats[i].replace(/10/gm, '.')
            pats[i] = pats[i].replace(/\*+/gm, ' ')
            pats[i] = pats[i].replace(/0+/gm, ' ').trim();
            pats[i] = pats[i].replace(/ /gm, '6').trim().split(6)
        } 
    })
    
    let newArr = [];
    for (let i = 0; i < pats.length; i++){
        newArr+=pats[i]+' '
    }
    let n =[]
    let j = n.concat(...pats)
    
    let newArre = [];
    for (let i = 0; i < j.length; i++) {
        if (j[i] === "") {
            newArre.push(" ");
        }
    
        for (const letter in MORSE_TABLE) {
            if (letter === j[i]) {
              let m =  newArre.push(MORSE_TABLE[letter]);
            }
        }
    }
    
    return newArre.join('')
}

module.exports = {
    decode
}