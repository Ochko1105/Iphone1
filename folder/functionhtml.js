let num1input = document.getElementById("input1");
let num2input = document.getElementById("input2");
let button = document.getElementById("btn");
let answer = document.getElementById("answer");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let button4 = document.getElementById("btn4");
let button5 = document.getElementById("btn5");
function buttonclick() {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  let sum = num1 + num2;
  answer.innerText = sum;
}
function buttonclick2() {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  let sum = num1 - num2;
  answer.innerText = sum;
}
function buttonclick3() {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  let sum = num1 * num2;
  answer.innerText = sum;
}
function buttonclick4() {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  let sum = num1 / num2;
  answer.innerText = sum;
}
function buttonclick5() {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  if (num1 > num2) {
    sum = num1;
  } else {
    sum = num2;
  }
  answer.innerText = sum;
}

button.addEventListener("click", buttonclick);
button2.addEventListener("click", buttonclick2);
button3.addEventListener("click", buttonclick3);
button4.addEventListener("click", buttonclick4);
button5.addEventListener("click", buttonclick5);
