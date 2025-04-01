export default function filter_list(l) {
    if (!l || l.length === 0 || !Array.isArray(l)) {
        throw new Error(
          `Provide an array of non-negative integers and strings`
        );
    }
    if (!l.every(i => (typeof i === 'string' || Number.isInteger(i) && i >= 0))) {
        throw new Error(`positive integers and strings only please`);
    }

    return l.filter(i => Number.isInteger(i));
}