const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: 'add',
}

const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: '+',
}

const exampleSubractionInput = {
  num1: 9,
  num2: 3,
  operation: 'subtract',
}

const exampleSubractionInput = {
  num1: 9,
  num2: 3,
  operation: '-',
}

const exampleMultiplicationInput = {
  num1: 12,
  num2: 23,
  operation: 'multiply',
}

const exampleMultiplicationInput = {
  num1: 12,
  num2: 23,
  operation: '*',
}

const exampleDivisionInput = {
  num1: 13,
  num2: 4,
  operation: 'divide',
}

const exampleDivisionInput = {
  num1: 13,
  num2: 4,
  operation: '/',
}

const validation = function(input){
  if(isNaN(input.num1) || isNaN(input.num2)){
    console.log('This is not a number. Please enter a number.')
  }
  else {
    const calculation = function(input) { 
      if(input.operation === 'add' || input.operation === '+'){
        
      }
    }
  }
}

