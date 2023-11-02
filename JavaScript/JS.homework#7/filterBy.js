function filterBy(array, type) {
  // Создаём новый массив, который будет содержать результат фильтрации
  const filteredArray = [];

  // Проходим по всем элементам массива
  for (const element of array) {
    // Проверяем тип элемента
    if (typeof element !== type) {
      // Добавляем элемент в новый массив
      filteredArray.push(element);
    }
  }

  // Возвращаем новый массив
  return filteredArray;
}

// Пример использования
const array = ['hello', 'world', 23, '23', null];
const filteredArray = filterBy(array, 'string');
console.log(filteredArray); // [23, null]
