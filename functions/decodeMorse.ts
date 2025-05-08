export default function decodeMorse(morseCode: string) {
    if (!morseCode || morseCode.length < 1 || typeof morseCode !== 'string') {
        throw new Error('Invalid input');
    }
  // Trim string
    const cleanStr: string = morseCode.trim();
    if (cleanStr.match(/\s{4,}/g) || cleanStr.match(/\s{2,2}/g) && !cleanStr.match(/\s{3,3}/g)) { console.log(`For more accurate results check spacing: multiple spaces adjusted to 3`) }
    
  const fixedSpaceStr = cleanStr.replace(/\s{2,}/g, `   `);
  // split at 3 white spaces for words
  const words = fixedSpaceStr.split(`   `);
    let decoded = '';

  // split at 1 whitespace for charcters
  for (let word of words) {
      for (let char of word.split(' ')) {

      if (
        char === '..--..' ||
        char === '--..--' ||
        char === '.-.-.-'
      ) {
        decoded = decoded.slice(0, -1);
      }

      decoded += getCharacter(char);
    }
    decoded += ` `;
  }
//   console.log(decoded);
  return decoded.trim();
}

function getCharacter(code: string) {
  const morsecodeAlph = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
  };
  return morsecodeAlph[code];
}
