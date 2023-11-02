function createNewUser() {
  // Запрашиваем имя и фамилию пользователя
  const firstName = prompt("Введите имя: ");
  const lastName = prompt("Введите фамилию: ");

  // Запрашиваем дату рождения пользователя
  const birthday = prompt("Введите дату рождения (dd.mm.yyyy): ");

  // Создаём объект пользователя
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    birthday: birthday,
  };

  // Добавляем в объект пользователя метод getAge()
  newUser.getAge = function() {
    const today = new Date();
    const birthDate = new Date(birthday);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
  };

  // Добавляем в объект пользователя метод getPassword()
  newUser.getPassword = function() {
    return this.firstName[0].toUpperCase() +
      this.lastName.toLowerCase() +
      this.birthday.slice(-4);
  };

  // Возвращаем объект пользователя
  return newUser;
}

// Создаём пользователя
const user = createNewUser();

// Получаем возраст пользователя
const age = user.getAge();

// Получаем пароль пользователя
const password = user.getPassword();

// Выводим результат работы функции createNewUser()
console.log(user);

// Выводим возраст пользователя
console.log("Возраст пользователя: " + age);

// Выводим пароль пользователя
console.log("Пароль пользователя: " + password);
