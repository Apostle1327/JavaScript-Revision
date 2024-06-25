const valueA = +prompt("Enter the First Operand");
const operator = prompt("Enter the Operator");
const valueB = +prompt("Enter the Second Operand");

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
