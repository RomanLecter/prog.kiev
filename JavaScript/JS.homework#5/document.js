class Document {
    constructor(title, body, footer, date) {
      this.title = title;
      this.body = body;
      this.footer = footer;
      this.date = date;
    }
  
    // Метод для заполнения объекта "Приложение"
    fillApplication(title, body, footer, date) {
      this.application = new Application(title, body, footer, date);
    }
  
    // Метод для отображения документа
    display() {
      console.log("Документ:");
      console.log("Заголовок: " + this.title);
      console.log("Тело: " + this.body);
      console.log("Футер: " + this.footer);
      console.log("Дата: " + this.date);
  
      if (this.application) {
        console.log("Приложение:");
        console.log("Заголовок приложения: " + this.application.title);
        console.log("Тело приложения: " + this.application.body);
        console.log("Футер приложения: " + this.application.footer);
        console.log("Дата приложения: " + this.application.date);
      }
    }
  }
