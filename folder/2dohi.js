let input = document.getElementById("age-input");
let input2 = document.getElementById("age-input2");
let input3 = document.getElementById("age-input3");
let button = document.getElementById("submit2");
let button2 = document.getElementById("submit3");
let button3 = document.getElementById("submit4");
let button4 = document.getElementById("submit5");

button.addEventListener("click", () => {
  console.log(
    parseInt(input.value) + parseInt(input2.value) + parseInt(input3.value)
  );
});

button2.addEventListener("click", () => {
  console.log(
    parseInt(input.value) - parseInt(input2.value) - parseInt(input3.value)
  );
});

button3.addEventListener("click", () => {
  console.log(
    parseInt(input.value) * parseInt(input2.value) * parseInt(input3.value)
  );
  console.log(parseInt(input.value) * parseInt(input2.value));
});

button4.addEventListener("click", () => {
  console.log(parseInt(input.value) / parseInt(input2.value));
});
let max1 = document.getElementById("max1-input");
let max2 = document.getElementById("max-input2");
let max3 = document.getElementById("max-input3");
let minbutton = document.getElementById("min-button");
minbutton.addEventListener("click", () => {
  if (parseInt(input.value) > parseInt(input2.value)) {
    if (parseInt(input2.value) > parseInt(input3.value)) {
      console.log(parseInt(input3.value));
    } else {
      console.log(parseInt(input2.value));
    }
  } else {
    if (parseInt(input.value) > parseInt(input3.value)) {
      console.log(parseInt(input3.value));
    } else {
      console.log(parseInt(input.value));
    }
  }
});
let avg = document.getElementById("number1");
let avg2 = document.getElementById("number2");
let avg3 = document.getElementById("number3");
let avgbutton = document.getElementById("average-button");
avgbutton.addEventListener("click", () => {
  console.log(
    (parseInt(input.value) + parseInt(input2.value) + parseInt(input3.value)) /
      3
  );
});
let maxbutton = document.getElementById("max-button");
maxbutton.addEventListener("click", () => {
  if (parseInt(input.value) > parseInt(input2.value)) {
    if (parseInt(input.value) > parseInt(input3.value)) {
      console.log(parseInt(input.value));
    } else {
      console.log(parseInt(input3.value));
    }
  } else {
    if (parseInt(input.value) > parseInt(input3.value)) {
      console.log(parseInt(input.value));
    } else {
      console.log(parseInt(input2.value));
    }
  }
});
