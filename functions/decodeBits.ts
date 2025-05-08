import decodeMorse from "./decodeMorse";

export default function decodeBits(bits: string) {
    if (!bits || bits.length < 1 || typeof bits !== 'string') {
        throw new Error(`Invalid input`);
    }

    bits = bits.replace(/^0+/, '').replace(/0+$/, '');
    console.log(bits)

  let leastConsecutiveCount = bits.length;
  let currentCount = 0;
  let current = '';

    let workBits = bits.split('');

    for (let i = 0; i < workBits.length; i++) {
      if (workBits[i] === workBits[i - 1] || i === 0) {
      current += workBits[i];
      currentCount++;
        
      } else {
        if (i === workBits.length - 1) {
              current = workBits[i];
            currentCount = 1;
            if (currentCount < leastConsecutiveCount) {
                leastConsecutiveCount = currentCount;
            }
        }
        if (currentCount < leastConsecutiveCount) {
        leastConsecutiveCount = currentCount;
      }
      current = '';
      currentCount = 1;
    }
    }
    if (current === '111' && leastConsecutiveCount === 3) {
        return '-';
    }

    console.log(leastConsecutiveCount)
    const normalisedBits =
      workBits
        .filter((v, i) => i % leastConsecutiveCount === 0)
        .join('')
    console.log(normalisedBits)
        
    const testBits = normalisedBits.match(/0+|1+/g);
    for (let bit of testBits) {
        isValid(bit);
    }

    bits = normalisedBits
        .replace(/0000000/g, '   ') // word gaps = 7 time units
        .replace(/111/g, '-')
        .replace(/000/g, ' ')
        .replace(/1/g, '.')
        .replace(/0/g, '');
    
        return bits;
}


function isValid(bit: string) {
    const binLength = bit.length
    if (
      bit.slice(0, 1) === '0' &&
      binLength !== 1 &&
      binLength % 7 !== 0 &&
      binLength % 3 !== 0
    ) {
      throw new Error(`Invalid gap`);
    }
    if (
      bit.slice(0, 1) === '1' &&
       binLength !== 1 &&
      binLength % 3 !== 0
    ) {
      throw new Error(`Invalid code`);
    }
}

