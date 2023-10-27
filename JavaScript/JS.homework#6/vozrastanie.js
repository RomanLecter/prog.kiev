//Функция-конструктор

function Human (name, age) {
    this.name = name;
    this.age = age;
}

//Создание массива объектов

const humans = [
    new Human("Анна", 26),
    new Human("Иван", 31),
    new Human("Роман", 20),
    new Human("Таньяна", 22),
    new Human("Мария", 27),
  ];

//Функция сортировки

  function sortHumans(humans, vozrastanie = true) {
    if (vozrastanie) {
      humans.sort((a, b) => a.age - b.age);
    } else {
      humans.sort((a, b) => b.age - a.age);
    }
  }

/*вывод

sortHumans(humans, false);

console.log(humans); 

*/
