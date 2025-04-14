export default function findUniq(array) {
    const uniq = {};
    let countOfUniqueNums = 0;

    for (const val of array) {

    if (!(val in uniq)) countOfUniqueNums++;
        uniq[val] = uniq[val] ? uniq[val] + 1 : 1;

        if (countOfUniqueNums === 2) {
        
            let foundMultiple = false;
            for (const key in uniq) {
                if (uniq[key] > 1) {
                    foundMultiple = true;
                    break;
                }
            }
        
            if (foundMultiple) {
                for (const key in uniq) {
                    if (uniq[key] === 1) return Number(key);
                }
            }

        }
    }
}
