export default function humanReadable(seconds: number) {

    if (!seconds && seconds !== 0 || seconds < 0 || seconds > 359999 || !Number.isInteger(seconds) || seconds % 1 !== 0) {
        throw new Error(`Invalid input`);
    }

    const hours = formatSingleDigit(Math.floor(seconds / 3600));
    const mins = formatSingleDigit(Math.floor((seconds - hours * 3600) / 60));
    const secs = formatSingleDigit(seconds - hours * 3600 - mins * 60);
    const format = `${hours}:${mins}:${secs}`;
    console.log(seconds, hours, mins, secs, format);
    return format;
}

function formatSingleDigit(num) {
    return num < 10 ? `0${num}` : num;
}