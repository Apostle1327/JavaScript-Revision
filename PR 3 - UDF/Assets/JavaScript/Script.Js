function question1() {
  let outerValue = 10;
  function inner() {
    let innerValue = 20;
    console.log(outerValue + innerValue);
  }
  inner();
}

function question2() {
  let add = (a, b) => a + b;
  console.log(add(13, 27));
}

function question3() {
  console.log(test());
  function test() {
    return "Hoisted";
  }
}

function question4() {
  function outerFunction() {
    function innerFunction() {
      return "Return from Inner Function";
    }
    return innerFunction;
  }
  let fn = outerFunction;
  console.log(fn());
}

function question5() {
  function outerFunction() {
    let arrow = () => {
      console.log(arguments[0]);
    };
    arrow(1, 2, 3);
  }
  outerFunction(4, 5, 6);
}

function question6() {
  function greeting(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greeting());
  console.log(greeting("Neville!"));
}

function question7() {}
