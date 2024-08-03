function question1() {
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [];

  console.log(a1);

  for (let i = a1.length - 1; i >= 0; i--) {
    a2[a1.length - i - 1] = a1[i];
  }
  // for (let i = 0; i < a1.length; i++) {
  //   a2[i] = a1[a1.length - i - 1];
  // }
  console.log(a2);
}

function question2() {
  let a1 = [10, 5, 20, 8, 25];
  let largestElement = a1[0];
  let secondLargestElement = a1[0];

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] > largestElement) {
      secondLargestElement = largestElement;
      largestElement = a1[i];
    }
  }
  return console.log(secondLargestElement);
}

function question3() {
  let a1 = [1, 2, 2, 3, 4, 4, 5];
  let j = 0;
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a1[i + 1]) {
      a1[j] = a1[i];
      j++;
    }
  }
  a1.length = j;
  return console.log(a1);
}

function question4() {
  let a1 = [1, 2, 3, 4];
  let a2 = [3, 4, 5, 6];
  let a3 = [];

  for (i = 0; i < a1.length; i++) {
    for (j = 0; j < a2.length; j++) {
      if (a1[i] === a2[j]) {
        a3.push(a2[j]);
      }
    }
  }
  return console.log(a3);
}
function question5() {
  let a1 = [0, 1, 0, 3, 0, 12];
  let result = 0;

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== 0) {
      [a1[result], a1[i]] = [a1[i], a1[result]];
      result++;
    }
  }
  return console.log(a1);
}

function question6() {
  let a1 = [1, 3, 2, 7];
  let sum = 0;

  for (let i = 0; i < a1.length; i++) {
    sum += a1[i];
  }
  return console.log(sum);
}

function question7() {
  let a1 = [1, 2, 4, 5, 6, 7];

  let min = Math.min(...a1);
  let max = Math.max(...a1);
  let totalSum = (max * (max + 1)) / 2 - (min * (min - 1)) / 2;

  let sum = 0;
  for (let i = 0; i < a1.length; i++) {
    sum += a1[i];
  }
  return console.log(totalSum - sum);
}

function question8() {
  let a1 = [3, 2, 7, 1];
  console.log(`Initial Array = ${a1}`);
  let last = a1[a1.length - 1];

  for (let i = a1.length - 2; i >= 0; i--) {
    a1[i + 1] = a1[i];
  }
  a1[0] = last;
  return console.log(a1);
}

function question9() {
  let a1 = [1, 3, 2, 7];
  let a2 = [1, 3, 2, 7];
  let result = false;

  for (let i = 0; i < a1.length; i++) {
    result = false;
    for (let j = 0; j < a2.length; j++) {
      if (a1[i] === a2[i]) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  console.log(a1);
  console.log(a2);
  return console.log(`Anagram = ${result}`);
}

function question10() {
  let a1 = [10, 20, 30, 40, 50];
  let index = 30;

  for (let i = 0; i < a1.length; i++) {
    if (a1[i] === index) {
      console.log(`Value to be searched form the array : ${index}`);
      return console.log(`Index of the value :${i}`);
    }
  }

  console.log(`Value to be searched form the array : ${index}`);
  return console.log(-1);
}
