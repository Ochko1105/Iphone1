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
    for (j = 1; j <= number; j++) {
      if (j == i) {
        star += j;
      }
    }
    star = star + "\n";
  }

  return star;
}
console.log(numbers5(5));
