function numbers(number) {
  star = "";
  for (i = 1; i <= number; i++) {
    for (j = 1; j <= i; j++) {
      star += j;
    }
    star = star + "\n";
  }

  return star;
}
console.log(numbers(5));
function numbers2(number) {
  star = "";
  for (i = 1; i <= number; i++) {
    for (j = i; j <= number; j++) {
      star += j;
    }
    star = star + "\n";
  }

  return star;
}
console.log(numbers2(5));
function numbers3(number) {
  star = "";
  for (i = 1; i <= number; i++) {
    for (j = 1; j <= i; j++) {
      star += j;
    }
    star = star + "\n";
  }

  return star;
}
console.log(numbers3(5));
function numbers4(number) {
  star = "";
  for (i = 1; i <= number; i++) {
    for (j = 1; j <= i; j++) {
      star += i;
    }
    star = star + "\n";
  }

  return star;
}
console.log(numbers4(5));
function numbers5(number) {
  star = "";
  for (i = 1; i <= number; i++) {
    for (j = 1; j <= i; j++) {
      if (j == i) {
        star += j;
      }
    }
    star = star + "\n";
  }

  return star;
}
console.log(numbers5(5));
function problem5(n) {
  urjver = "";
  for (i = 1; i <= n; i++) {
    urjver += i * 5;
    urjver = urjver + "\n";
  }

  return urjver;
}
console.log(problem5(6));
function problem6(n) {
  oron = 0;
  {
    for (i = 1; i < n; i++) {}
  }
}
function ifleapyear(year) {
  if (year % 4 == 0 && year % 400 == 0) {
    year = "Leap year mun";
  } else {
    year = "leap year bish";
  }
  return year;
}
console.log(ifleapyear(2000));
