//3 задача

function printNumbers(a, b) {
  // Проверка на корректность входных данных

  if (typeof a !== "number" || typeof b !== "number") {
    console.log("A и B должны быть целыми числами.");
    return;
  }
  if (a > b) {
    console.log("A должно быть меньше или равно B.");
    return;
  }

  // Вывод чисел в порядке возрастания или убывания

  if (a < b) {
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  } else {
    for (let i = b; i >= a; i--) {
      console.log(i);
    }
  }
}

// Тестирование

printNumbers(1, 10);
printNumbers(10, 1);
