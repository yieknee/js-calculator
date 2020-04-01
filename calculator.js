const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
};

const exampleAdditionInput2 = {
  num1: 3,
  num2: 5,
  operation: '+',
};

const exampleSubractionInput = {
  num1: 9,
  num2: 3,
  operation: 'subtract',
};

const exampleSubractionInput2 = {
  num1: 9,
  num2: 3,
  operation: '-',
};

const exampleMultiplicationInput = {
  num1: 12,
  num2: 23,
  operation: 'multiply',
};

const exampleMultiplicationInput2 = {
  num1: 12,
  num2: 23,
  operation: '*',
};

const exampleDivisionInput = {
  num1: 13,
  num2: 4,
  operation: 'divide',
};

const exampleDivisionInput2 = {
  num1: 13,
  num2: 4,
  operation: '/',
};

const exampleDiv0ErrorInput = {
  num1: 13,
  num2: 0,
  operation: '/',
};

const exampleInvalidOperationInput = {
  num1: 13,
  num2: 4,
  operation: 'quarantine',
};

const exampleInvalidNumInput = {
  num1: 'horse',
  num2: 23,
  operation: '-',
};

const exampleInvalidNumInput2 = {
  num1: 13,
  num2: 'horse',
  operation: '*',
};

const exampleInvalidNumInput3 = {
  num1: 'horse',
  num2: 'buggy',
  operation: 'divide',
};

const calculate = function(input) { 
  if(isNaN(input.num1) || isNaN(input.num2) || input.num1 === "" || input.num1 === " " || input.num2 === "" || input.num2 === " "){
    if(isNaN(input.num1) && isNaN(input.num2)){
      console.log(`${input.num1} and ${input.num2} are not numbers. Please enter numbers.`);
    }
    else if(isNaN(input.num1)){
      console.log(`${input.num1} is not a numbers. Please enter a number.`);
    }
    else if(isNaN(input.num2)){
      console.log(`${input.num2} is not a number. Please enter a number.`);
    };
  }
  else{

    if(input.operation === 'add' || input.operation === '+'){
      let sum = input.num1 + input.num2;
      return sum;
    }
    else if(input.operation === 'subtract' || input.operation === '-'){
      let difference = input.num1 - input.num2;
      return difference;
    }
    else if(input.operation === 'multiply' || input.operation === '*'){
      let product = input.num1 * input.num2;
      return product;
    }
    else if(input.operation === 'divide' || input.operation === '/'){
      if(input.num2 === 0){
        console.log('Div/0 Error! You can not divide by 0!')
      }
      else{
        let quotient = input.num1 / input.num2;
        return quotient;
      };
    }
    else {
      console.log(`${input.operation} is not a valid operand`);
    };
  };
};

console.log(calculate(exampleAdditionInput))
console.log(calculate(exampleAdditionInput2))
console.log(calculate(exampleSubractionInput))
console.log(calculate(exampleSubractionInput2))
console.log(calculate(exampleMultiplicationInput))
console.log(calculate(exampleMultiplicationInput2))
console.log(calculate(exampleDivisionInput))
console.log(calculate(exampleDivisionInput2))
console.log(calculate(exampleDiv0ErrorInput))
console.log(calculate(exampleInvalidOperationInput))
console.log(calculate(exampleInvalidNumInput))
console.log(calculate(exampleInvalidNumInput2))
console.log(calculate(exampleInvalidNumInput3))

const calculateInput = function(input) {
  input.num1 = parseFloat(input.num1);
  input.num2 = parseFloat(input.num2);
  if(isNaN(input.num1) || isNaN(input.num2)){
    console.log('One of your inputs is not a number. Please enter a number.');
  }
  else{

    if(input.operation === 'add' || input.operation === '+'){
      let sum = input.num1 + input.num2;
      console.log(sum);
    }
    else if(input.operation === 'subtract' || input.operation === '-'){
      let difference = input.num1 - input.num2;
      console.log(difference);
    }
    else if(input.operation === 'multiply' || input.operation === '*'){
      let product = input.num1 * input.num2;
      console.log(product);
    }
    else if(input.operation === 'divide' || input.operation === '/'){
      if(input.num2 === 0){
        console.log('Div/0 Error! You can not divide by 0!')
      }
      else{
        let quotient = input.num1 / input.num2;
        console.log(quotient);
      };
    }
    else {
      console.log(`${input.operation} is not a valid operand`);
    };
  };
};

const prompt = require('prompt');
const calculator = function(error, promptInput) {
  calculateInput(promptInput);
};
prompt.start();

prompt.get(['num1','num2','operation'], calculator);