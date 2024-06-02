const prompt = require('prompt');

prompt.start();

prompt.get(['age'], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Command-line input received:');
  console.log('  result: ' + JSON.stringify(result));
  console.log('  age: ' + result.age);

  // Проверка на пустое значение
  if (!result.age) {
    console.log('');
    return;
  }

  const K = parseInt(result.age, 10);

  // Проверка, является ли значение числом
  if (isNaN(K)) {
    console.log('Введене значення не є числом.');
    return;
  }

  if (K % 10 == 0 || K % 10 > 4 || (K >= 11 && K <= 14)) {
    console.log(K + ' років');
  } else if (K % 10 == 1) {
    console.log(K + ' рік');
  } else {
    console.log(K + ' роки');
  }
});