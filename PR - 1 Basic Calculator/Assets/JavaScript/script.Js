const valueA = +prompt("Enter the First Operator");
const operator = prompt("Enter the Operand");
const valueB = +prompt("Enter the Second Operator");

switch (operator) {
  case "+":
    console.log(valueA + valueB);
    break;

  case "-":
    console.log(valueA - valueB);
    break;

  case "*":
    console.log(valueA * valueB);
    break;

  case "/":
    console.log(valueA / valueB);
    break;

  case "%":
    console.log(valueA % valueB);
    break;
}
