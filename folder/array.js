let grades = [-20, 30, 40, 44, 77, 0, 33];
function findeyreg(eyreg) {
  let sum = 0;
  for (i = 0; i < eyreg.length; i++) {
    if (eyreg[i] > 0) {
      sum = sum + eyreg[i];
    }
  }
  return sum;
}

console.log(findeyreg(grades));
function findmin(grades) {
  let min = Infinity;
  for (i = 0; i < grades.length; i++) {
    if (grades[i] < min && grades[i] >= 0) {
      min = grades[i];
    }
  }
  return min;
}
console.log(findmin(grades));

function findmax(grades) {
  let max = grades[0];
  for (i = 0; i < grades.length; i++) {
    if (grades[i] > max) {
      max = grades[i];
    }
  }
  return max;
}

console.log(findmax(grades));
function oddavg(grades) {
  let sum = 0;
  let tegsh = 0;

  for (i = 0; i < grades.length; i++) {
    if (grades[i] % 2 == 0) {
      tegsh = tegsh + 1;
      sum = sum + grades[i];
    }
  }
  avg = sum / tegsh;
  return avg;
}
console.log(oddavg(grades));
