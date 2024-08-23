// Headline Js

let yourText = [["Calc", "#ffc107"]];

let x = 0;
let y = 0;
//how fast typing is
let wait = 200;

//how long you want to text stay before overwriting
let additionalWait = 1;
let txt = yourText[0][0].split("");
let out = "";
let retyping = setInterval(function () {
  document.getElementById("changingText").innerHTML = out;
  if (x > txt.length - 1) {
  } else {
    out += txt[x];
  }
  x++;
  if (x == txt.length + 2 + additionalWait) {
    if (y == yourText.length - 1) {
      y = 0;
      txt = yourText[y][0].split("");
      out = "";
      document.getElementById("changingText").innerHTML = out;
      document.getElementById("changingText").style.color = yourText[y][1];
      x = 0;
    } else {
      y += 1;
      txt = yourText[y][0].split("");
      out = "";
      document.getElementById("changingText").innerHTML = out;
      document.getElementById("changingText").style.color = yourText[y][1];
      x = 0;
    }
  }
}, wait);

/* =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/ */

// Main Calculator Js

const output = document.querySelector(`#display`);

function appendToDisplay(input) {
  output.value += input;
}

function clearDisplay() {
  output.value = "";
}

function calculate() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    output.value = `Error`;
  }
}

function square() {
  try {
    output.value *= output.value;
  } catch (error) {
    output.value = `Error`;
  }
}

function backSpace() {
  output.value = output.value.slice(0, -1);
}
