// ========== Завдання 4 ===========
const fs = require("fs");
const path = require("path");

class SmartTextReader {
  readFile(filename) {
    const filePath = path.join("lab-3", filename);
    const content = fs.readFileSync(filePath, "utf-8");
    return content.split("\n").map((line) => line.split(""));
  }
}

// Проксі з логуванням
class SmartTextChecker {
  constructor(reader) {
    this.reader = reader;
  }

  readFile(filename) {
    console.log(`Відкрито файл: ${filename}`);
    const content = this.reader.readFile(filename);
    console.log(`Прочитано ${content.length} рядків`);
    const symbols = content.reduce((sum, line) => sum + line.length, 0);
    console.log(`Загальна кількість символів: ${symbols}`);
    console.log(`Файл: ${filename} закрито`);
    return content;
  }
}

// Проксі з обмеженням доступу
class SmartTextReaderLocker {
  constructor(reader, restrictedPattern) {
    this.reader = reader;
    this.restrictedPattern = restrictedPattern;
  }

  readFile(filename) {
    if (this.restrictedPattern.test(filename)) {
      console.log("Access denied!");
      return [];
    }
    return this.reader.readFile(filename);
  }
}

// === Тестування ===
console.log("===== Завдання 4: Проксі =====");
const filename = "text.txt";

// Використання звичайного читача
const reader = new SmartTextReader();
console.log(reader.readFile(filename));

// Використання проксі з логуванням
const loggedReader = new SmartTextChecker(reader);
console.log(loggedReader.readFile(filename));

// Використання проксі з обмеженням доступу
const restrictedReader = new SmartTextReaderLocker(reader, /secret\.txt/);
console.log(restrictedReader.readFile(filename));
