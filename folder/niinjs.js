let n = document.getElementById("n");
let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
button.addEventListener("click", () => {
  let number = n.value;
  let numberorg = parseInt(number);
  document.getElementById("answer").innerText = numberorg;

  while (numberorg > 0) {
    console.log(numberorg);
    numberorg = numberorg - 1;
  }
});
button2.addEventListener("click", () => {
  let number = n.value;
  let numberorg = parseInt(number);
  while (numberorg > 0) {
    if (numberorg % 2 === 1) {
      console.log(numberorg);
    }
    numberorg = numberorg - 1;
  }
});
button3.addEventListener("click", () => {
  let number = n.value;
  let numberorg = parseInt(number);
  let index = 0;
  let sum = 0;

  while (index < numberorg) {
    index = index + 1;
    sum = sum + index;
    console.log(sum);
  }
});
let mor = 5;

while (mor > 0) {
  let bagna = 5;
  let sp1Result = "";
  while (bagna > 0) {
    sp1Result = sp1Result + "*";
    bagna = bagna - 1;
  }
  console.log(sp1Result);
  mor = mor - 1;
}
let size = 5;
let row = size;

while (row > 0) {
  let column = size;
  let result = "";
  while (column > 0) {
    if (row == 1 || row == size || column == 1 || column == size) {
      result = result + "*";
    } else {
      result = result + " ";
    }
    column = column - 1;
  }
  console.log(result);
  row = row - 1;
}
let size11 = 5;
let row11 = 1;
while (row11 <= 5) {
  let result = "";
  let column = 1;
  while (column <= row11) {
    result = result + "*";
    column = column + 1;
  }
  console.log(result);
  row11 = row11 + 1;
}
let size12 = 5;
let row12 = 1;
while (row12 <= size12) {
  let result = "";

  let column = 1;
  while (column <= size12 - row12) {
    result = result + " ";
    column = column + 1;
  }

  let starCount = row12;
  while (starCount > 0) {
    result = result + "*";
    starCount = starCount - 1;
  }
  console.log(result);
  row12 = row12 + 1;
}
let m = 5;
let mor4 = 1;
let bagana4 = 1;
let result4 = "";
while (mor4 <= m) {
  while (bagana4 <= m) {
    result4 = result4 + "*";
    bagana4 = bagana4 + 1;
  }
  mor4 = mor4 + 1;
  console.log(result4);
}
