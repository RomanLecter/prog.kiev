function createNewUser() {
  // Запрашиваем имя и фамилию пользователя
  const firstName = prompt("Введите имя: ");
  const lastName = prompt("Введите фамилию: ");

  // Создаём объект пользователя
  const newUser = {
    firstName: firstName,
    lastName: lastName,
  };

  // Добавляем в объект пользователя метод getLogin()
  newUser.getLogin = function() {
    return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
  };

  // Возвращаем объект пользователя
  return newUser;
}

// Создаём пользователя
const user = createNewUser();

// Получаем логин пользователя
const login = user.getLogin();

// Выводим логин в консоль
console.log(login);
