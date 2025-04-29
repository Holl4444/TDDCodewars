export default function skate(string: string) {
  if (!string || string.length < 1 || typeof string !== 'string') {
    throw new Error(`Invalid input`);
  }
  const regex = /[^!@#$%^&*()_+\-|<>.,';:"`~=?\/\\{}\[\]]/g;
  const cleanedString = string.replaceAll(regex, '');
  if (cleanedString.slice(0, 1) !== '_') {
    throw new Error(`Invalid input`);
    }

    let count: number = 0;
    let catchingAir = false;
    const ramps = /\//; // identify individual dots and not /. ramps followed by a dot

    const len = cleanedString.length
    for (let i = 0; i < len; i++) {
        if (/\./.test(cleanedString[i])) {
            if (!catchingAir) {
                return -1;
            }
        }
        if (ramps.test(cleanedString[i])) {
            catchingAir = true;
            for (let j = i + 1; j < cleanedString.length; j++) {
                if (cleanedString[j] !== '.') {
                    catchingAir = false;
                    i += count;
                    break;
                }
                count++;
            }
        }
    }
  return count % 2 === 0 ? 0 : 1;
}

