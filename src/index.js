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

const bin_table = {
    '00': '',
    '10': '.',
    '11': '-',
  };

function decode(expr) {
    let result = '', bin_code ='';
    for (let i=0; i<expr.length; i=i+10) {
      morse_code = '';
      bin_code = expr.substring(i,i+10);
      if (bin_code != '**********') {
        for (let j=0; j<10; j=j+2) {
          bin_element = bin_code.substring(j,j+2);
          morse_code = morse_code + bin_table[bin_element];
        }
        result = result + MORSE_TABLE[morse_code];
      } else {
        result = result + ' ';
      }   
    }
    return result;    
}


module.exports = {
    decode
}