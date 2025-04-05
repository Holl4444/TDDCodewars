export default function bouncingBall(h, bounce, window) {
    if (h <= 0 || window >= h || bounce >= 1 || bounce < 0) {
        return -1;
    }
    let count = 0;
    let currentHeight = h;
    function bounceCount() {
        if (currentHeight <= window) {
            return count;
        }
        currentHeight *= bounce;
        if (currentHeight > window) {
            count += 2;
        } else {
            count++
        }
        return bounceCount(currentHeight, bounce, window);
    }
    return bounceCount(h, bounce, window);
}