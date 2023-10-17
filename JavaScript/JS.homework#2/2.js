//2 задача

let login = prompt ('Введите логин', '');
let message = (login == 'Сотрудник') ? 'Привет!' :
(login == 'Директор') ? 'Здравствуйте!' :
(login == '') ? 'Нет логина' : '';
alert (message);

