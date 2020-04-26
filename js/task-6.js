let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введитие число');

  if (input === null) {
    console.log('Отменено пользователе!');
    break;
  }

  input = Number(input);

  if (Number.isNaN(input) === true) {
    alert('Было введено не число, попробуйте еще раз');
  }

  if (Number.isNaN(input) === false) {
    numbers.push(input);
    total += input;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
