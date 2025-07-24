let students = [
  { name: "boldo", age: 30, grade: 90, balance: 1700, gender: "male" },
  { name: "bataa", age: 20, grade: 100, balance: 6000, gender: "male" },
  { name: "dorjoo", age: 40, grade: 80, balance: 8000, gender: "female" },
];

function topstudent(student) {
  let topstudent = student[0];
  for (i = 0; i < student.length; i++) {
    if (topstudent.grade < student[i].grade) {
      topstudent = student[i];
    }
  }
  return topstudent;
}
top = topstudent(students);
console.log("top", top);
///////////////////////////////////////////

function oldest(student) {
  let oldest = student[0];
  for (i = 0; i < student.length; i++) {
    if (oldest.age < student[i].age) {
      oldest = student[i];
    }
  }
  return oldest;
}
old = oldest(students);
console.log("oldest ", old);
///////////////////////////////////////////

function richest(student) {
  let richest = student[0];
  for (i = 0; i < student.length; i++) {
    if (richest.balance < student[i].balance) {
      richest = student[i];
    }
  }
  return richest;
}
rich = richest(students);
console.log("richest ", rich);
///////////////////////////////////////////
function findstudentbyage(student, nas) {
  for (i = 0; i < student.length; i++) {
    if (student[i].age == nas) {
      return student[i];
    }
  }
  return "Algada";
}

let guch = findstudentbyage(students, 30);
console.log("30tai boro ", guch);
///////////////////////////////////////////
function averageage(student) {
  x = 0;
  sumavg = 0;
  avgall = 0;
  for (i = 0; i < student.length; i++) {
    if (student[i].age > 0) {
      x = x + 1;
      sumavg = sumavg + student[i].age;
    }
  }
  avgall = sumavg / x;
  return avgall;
}
console.log("averageage", averageage(students));
///////////////////////////////////////////
function ballanceavg(student) {
  nasandhuregchdiintoo = 0;
  sumavg = 0;
  balanceall = 0;
  for (i = 0; i < student.length; i++) {
    if (student[i].age > 21) {
      nasandhuregchdiintoo = nasandhuregchdiintoo + 1;
      sumavg = sumavg + student[i].balance;
    }
  }
  balanceall = sumavg / nasandhuregchdiintoo;
  return balanceall;
}
console.log("balanceavg", ballanceavg(students));
///////////////////////////////////////////
function male(student) {
  x = 0;
  sumavg = 0;
  balanceall = 0;
  for (i = 0; i < student.length; i++) {
    if (student[i].gender == "male") {
      x = x + 1;
      sumavg = sumavg + student[i].balance;
    }
  }
  balanceall = sumavg / x;
  return x;
}
console.log("male", male(students));
///////////////////////////////////////////
function female(student) {
  let female = 0;

  for (i = 0; i < student.length; i++) {
    if (student[i].gender == "female") {
      female++;
    }
  }

  let femalep = (female / student.length) * 100;

  return femalep;
}
let femaleptg = female(students);
console.log("female%", femaleptg);
///////////////////////////////////////////
