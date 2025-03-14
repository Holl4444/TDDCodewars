export function incrementString(strng = '') {
  const lastChar = strng.slice(-1);
  if (isNaN(lastChar) || !strng) {
    return strng + '1';
    }
    if (strng.length > 15) {
        throw new Error('Getting into big int territory here!')
    }
  if (lastChar === '9') {
    let newString = strng.slice(0, -1);
    let roundString = strng.slice(-1);
    while (newString.charAt(newString.length - 1) === '9') {
      roundString += newString.charAt(newString.length - 1);
      newString = newString.slice(0, -1);
    }
    if (newString.charAt(newString.length - 1) === '0') {
      newString = newString.slice(0, -1);
    }

    return `${newString}` + `${parseInt(roundString) + 1}`;
  }
  return `${strng.slice(0, -1)}` + `${parseInt(lastChar) + 1}`;
}


// Most concise CodeWars solution
// const incrementString = (s) =>
//   s.replace(/[0-8]?9*$/, (m) => String(++m));
