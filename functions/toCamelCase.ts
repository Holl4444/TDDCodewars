export default function toCamelCase(string: string) {

    let flag = false;
    const regex = /^[a-zA-Z0-9]+$/;
    if (regex.test(string)) {
        return string;
    }
    const allowedCharacters = /^[-_a-z0-9]+$/i;
    if (!string || !allowedCharacters.test(string)) {
        throw new Error(`Invalid input`);
    }

    const finalStr: string[] = [];
    const lowerCaseStr = string.slice(0, 1) + string.slice(1).toLowerCase();

    for (let char of lowerCaseStr.split('')) {
        !regex.test(char) ? flag = true : flag == true ? (finalStr.push(char.toUpperCase()), flag = false) : finalStr.push(char);
    };
    return finalStr.join('');
}


// Code golf: (.) indicates any following characters and makes the next index available to access (-, c)
// export default function toCamelCase(string: string) {
//   if (/^[a-zA-Z0-9]+$/.test(string)) return string;
//   if (!string || !/^[-_a-z0-9]+$/i.test(string))
//     throw new Error(`Invalid input`);

//   return string
//     .replace(/[-_](.)/g, (_, c) => c.toUpperCase())
//     .replace(/^[-_]+/, '')
//     .replace(/^[A-Z]/, (c) => c.toLowerCase());
// }