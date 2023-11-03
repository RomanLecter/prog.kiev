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
  
    function formatDateToISO(dateString) {
  // Разделяем строку по точке
  const parts = dateString.split('.');

 // Проверяем, находится ли строка даты в ожидаемом формате
  if (parts.length === 3) {
   // Дополняем одиночные цифры ведущими нулями
    const day = parts[0].padStart(2, '0');
    const month = parts[1].padStart(2, '0');
    const year = parts[2];

    // Возвращаем дату в формате ISO 8601
    return `${year}-${month}-${day}`;
  } else {
    throw new Error('Неверный формат даты. Пожалуйста, используйте формат ДД.ММ.ГГГГ.');
  }
}


  // Добавляем в объект пользователя метод getAge()
   newUser.getAge = function() {
    const today = new Date();
    console.log('birthday', birthday)
    const isoDate = formatDateToISO(`${birthday}`);
    const birthDate = new Date(isoDate);
    const age = today.getFullYear() - birthDate.getFullYear();
    console.log('age', age)
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
