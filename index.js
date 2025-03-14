// function toCaps(array) {
//     //split string into an array of words
//     return array.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// console.log(toCaps('welcome to the jungle'))

//find students with scores < 60
//uppercase the passing students names

//al;pha sort them

const students = [
  { name: 'Alice', age: 20, score: 85 },
  { name: 'Bob', age: 22, score: 55 },
  { name: 'Charlie', age: 21, score: 72 },
  { name: 'David', age: 19, score: 40 },
  { name: 'Eve', age: 23, score: 91 },
];

function passingStudentsCaps(array) {
  const filtered = array.filter(student => student.score > 59);
  const studentsCapped = filtered.map(student =>
    student.name.toUpperCase()
    );
  return studentsCapped.sort(studentsCapped.name);
}

console.log(passingStudentsCaps(students));
