size = 5;
for (let i = 0; i < size; i++) {
  star = "";
  for (j = 0; j < i; j++) {
    star += " ";
  }
  for (j = 0; j <= size; j++)
    if (j == 0 || j == size || i == 0 || i == size - 1) {
      star = star + "*";
    } else {
      star += " ";
    }
  console.log(star);
}
size2 = 5;
for (i = 0; i < size2; i++) {
  star = "";
  for (j = 0; j < i + 1; j++) {
    star += "*";
  }
  console.log(star);
}
let size3 = 5;
for (i = 0; i < size3; i++) {
  star = "";
  for (j = 0; j < size3 - i - 1; j++) {
    star += " ";
  }
  for (j = 0; j < i + 1; j++) {
    star += "*";
  }
  console.log(star);
}
let size4 = 5;
for (i = 0; i < size4; i++) {
  star = "";

  for (j = 0; j < i + 1; j++) {
    if (j == 0 || i == 0 || i == j || i == size4 - 1) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}

let size5 = 5;
for (i = 0; i < size5; i++) {
  star = "";

  for (j = 0; j < size5 - i; j++) {
    star += "*";
  }
  console.log(star);
}
let size6 = 5;
for (i = 0; i < size6; i++) {
  star = "";

  for (j = 0; j < size6; j++) {
    if (j + 1 > i) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}
let size7 = 5;
for (i = 0; i < size7; i++) {
  star = "";

  for (j = 0; j < size7 * 2 - 1; j++) {
    if (j >= size7 - i - 1 && j <= size7 + i - 1) {
      star += "*";
    } else {
      star += " ";
    }
  }
  console.log(star);
}
let size8 = 5;
for (i = 0; i < size8; i++) {
  star = "";

  for (j = 0; j < size8 * 2 - 1; j++) {
    if (j >= size8 - i - 1 && j <= size8 + i - 1) {
      {
        star += "*";
      }
    } else {
      star += " ";
    }
  }
  console.log(star);
}
let size10 = 5;
