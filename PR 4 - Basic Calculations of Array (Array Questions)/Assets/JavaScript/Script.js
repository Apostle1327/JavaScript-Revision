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
      if (a1[i] == a2[j]) {
        for (i = 0; i < a2.length; i++) {
          a3[a3.length] = a1[i] == a2[j];
        }
      }
    }
  }
  return console.log(a3);
}
function question5() {}
