function problem1(age) {
  year = 2025 - age;

  console.log(year);
}
problem1(18);
function problem2(name) {
  console.log("Sain bainuu " + name);
}
problem2("ochko");

function problem3(a, b, c) {
  if (a > b && a > c) {
    if (b > c) {
      console.log(c);
    } else {
      console.log(b);
    }
  } else {
    console.log(a);
  }
}
problem3(5, 2, 1);
problem3(5, 2, 10);
problem3(7, 3, 1);
function Starpatern(pattern) {
  for (i = 0; i < pattern; i++) {
    star = "";
    for (j = 0; j <= pattern * 2 - 1; j++) {
      if (j - 1 == i * 2 - 1 || j == pattern * 2 - 1 - i * 2 - 1) {
        star += "*";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}
Starpatern(9);

function Plusstarpattern(pattern) {
  for (i = 0; i < pattern; i++) {
    star = "";
    for (j = 0; j < pattern; j++) {
      if (j == (pattern - 1) / 2 || i == (pattern - 1) / 2) {
        star += "+";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}

Plusstarpattern(9);

function rectangle(number) {
  for (i = 0; i < number; i++) {
    star = "";
    for (j = 0; j < number; j++) {
      if (j == 0 || j == i || i == number) {
        star += j + 1;
      }
    }
  }
  console.log(star);
}
rectangle(5);
