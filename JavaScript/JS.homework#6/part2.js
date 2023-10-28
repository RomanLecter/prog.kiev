function Human(name, age, gender, height, weight) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
}

// Методы уровня экземпляра

Human.prototype.sayHello = function() {
  console.log(`Привет, меня зовут ${this.name}!`);
};

Human.prototype.getAgeInYears = function() {
  return this.age;
};

Human.prototype.getAgeInDays = function() {
  return this.age * 365;
};

// Пример использования

const human = new Human("Андрей", 27, "мужской", 177, 68);

human.sayHello(); // "Привет, меня зовут Андрей"

console.log(human.getAgeInYears()); // 27
