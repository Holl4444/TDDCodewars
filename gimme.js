export default function gimme(triplet) {
  if (
    !Array.isArray(triplet) ||
    triplet.length !== 3 ||
    triplet.some((num) => typeof num !== 'number')
  ) {
    throw new Error(
      'Input should be an array of three numerical elements.'
    );
  }
  const setTrip = new Set(triplet);
  // console.log(setTrip);
  if (setTrip.size < 3) {
    throw new Error('Unique integers only please.');
  }
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}
