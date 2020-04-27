const numbers = [];
let total = 0;

while (true) {
  let input = prompt('Введите число');
  if (input === null) {
    console.log('Отменено пользователем!');
    break;
  }

  input = Number(input);
  const notNumber = Number.isNaN(input);
  if (notNumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(input);
}

function arraySum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}
total = arraySum(numbers);
console.log(total);
