//3 задача

function main() {
  // Ввод данных

  let a = Number(prompt("Введите A: "));
  let b = Number(prompt("Введите B: "));

  // Проверка на корректность входных данных

  if (a < b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    console.log("Сумма чисел от A до B равна " + sum);
  } else {
    console.log("A должно быть меньше B.");
  }
}

// Тестирование

main();

function main() {
  // Ввод данных

  let a = Number(prompt("Введите A: "));
  let b = Number(prompt("Введите B: "));

  // Проверка на корректность входных данных

  if (a < b) {
    for (let i = a; i <= b; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  } else {
    console.log("A должно быть меньше B.");
  }
}

// Тестирование

main();
