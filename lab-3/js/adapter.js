// ========== Завдання 1 ===========
// Клас Logger для виводу в консоль
class Logger {
  log(message) {
    console.log(`%c${message}`, "color: green");
  }

  error(message) {
    console.error(`%c${message}`, "color: red");
  }

  warn(message) {
    console.warn(`%c${message}`, "color: orange");
  }
}

// Клас FileWriter для запису у файл (емуляція)
class FileWriter {
  write(message) {
    console.log(`Writing to file: ${message}`);
  }

  writeLine(message) {
    console.log(`Writing line to file: ${message}\n`);
  }
}

// Адаптер для файлового логера
class FileLoggerAdapter {
  constructor(fileWriter) {
    this.fileWriter = fileWriter;
  }

  log(message) {
    this.fileWriter.write(`LOG: ${message}`);
  }

  error(message) {
    this.fileWriter.write(`ERROR: ${message}`);
  }

  warn(message) {
    this.fileWriter.write(`WARN: ${message}`);
  }
}

// === Тестування ===
console.log("===== Завдання 1: Адаптер =====");
const consoleLogger = new Logger();
consoleLogger.log("Лог!");
consoleLogger.error("Помилка!");
consoleLogger.warn("Попередження!");

const fileWriter = new FileWriter();
const fileLogger = new FileLoggerAdapter(fileWriter);
fileLogger.log("Лог.");
fileLogger.error("Помилка.");
fileLogger.warn("Попередження.");
