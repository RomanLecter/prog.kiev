const styles = ["Джаз", "Блюз"];

// Добавить "Рок-н-ролл" в конец
styles.push("Рок-н-ролл");

// Найти индекс среднего элемента
const middleIndex = Math.floor(styles.length / 2);

// Заменить значение в середине на "Классика"
styles[middleIndex] = "Классика";

// Удалить первый элемент массива
const removedItem = styles.shift();

// Показать удаленный элемент
console.log(removedItem);

// Вставить "Рэп" и "Регги" в начало массива
styles.unshift("Рэп", "Регги");

// Показать измененный массив
console.log(styles);
