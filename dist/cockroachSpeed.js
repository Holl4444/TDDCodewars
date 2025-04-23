export default function cockroachSpeed(s) {
    if (s < 0) {
        throw new Error('The cockroach turns around to go backwards');
    }
    if (typeof s !== 'number') {
        throw new Error(`Invalid input`);
    }
    //km -> cm * 100000
    //hour -> seconds 60 * 60 = 3600
    // km/h * 1000 / 36
    //floor it
    return Math.floor(s * 100000 / 3600);
}
//# sourceMappingURL=cockroachSpeed.js.map