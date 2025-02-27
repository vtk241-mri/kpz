// Zoo

// =======================================================
// Інтерфейси
// =======================================================
class IAnimal {
  makeSound() {
    throw new Error("Метод makeSound() має бути реалізований");
  }
}

class IEnclosure {
  addAnimal(animal) {
    throw new Error("Метод addAnimal() має бути реалізований");
  }
}

class IFood {
  getFoodInfo() {
    throw new Error("Метод getFoodInfo() має бути реалізований");
  }
}

// =======================================================
// Базовий клас для тварин
// =======================================================
class Animal extends IAnimal {
  constructor(name, species, sound) {
    super();

    if (!name || !species || !sound) {
      throw new Error("Неправильні параметри для тварини");
    }
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} (${this.species}) каже: ${this.sound}`);
  }
}

// =======================================================
// Класи конкретних тварин
// =======================================================
class Lion extends Animal {
  constructor(name) {
    super(name, "Лев", "Рррр!");
  }
}

class Elephant extends Animal {
  constructor(name) {
    super(name, "Слон", "Тууу!");
  }
}

// =======================================================
// Клас для корму тварин
// =======================================================
class Food extends IFood {
  constructor(name, quantity) {
    super();
    if (!name || quantity < 0) {
      throw new Error("Неправильні параметри для корму");
    }
    this.name = name;
    this.quantity = quantity;
  }
  getFoodInfo() {
    return `${this.quantity} кг ${this.name}`;
  }
}

// =======================================================
// Клас вольєра
// =======================================================
class Enclosure extends IEnclosure {
  constructor(type, capacity) {
    super();
    if (capacity < 1) {
      throw new Error("Кількість місць має бути не менше 1");
    }
    this.type = type;
    this.capacity = capacity;
    this.animals = [];

    this.foods = [];
  }
  addAnimal(animal) {
    if (!(animal instanceof Animal)) {
      throw new Error("Можна додавати лише об'єкти типу Animal");
    }
    if (this.animals.length >= this.capacity) {
      throw new Error(`Вольєр ${this.type} заповнений`);
    }
    this.animals.push(animal);
    console.log(`${animal.name} додано до вольєра ${this.type}`);
  }
  addFood(food) {
    if (!(food instanceof Food)) {
      throw new Error("Можна додавати лише об'єкти типу Food");
    }
    this.foods.push(food);
    console.log(`Корм ${food.name} додано до вольєра ${this.type}`);
  }
  listAnimals() {
    console.log(`Тварини у вольєрі "${this.type}":`);
    this.animals.forEach((animal) => {
      console.log(`- ${animal.name} (${animal.species})`);
    });
  }
  listFoods() {
    console.log(`Корм у вольєрі "${this.type}":`);
    this.foods.forEach((food) => {
      console.log(`- ${food.getFoodInfo()}`);
    });
  }
}

// =======================================================
// Клас для співробітників зоопарку
// =======================================================
class Employee {
  constructor(name, role) {
    if (!name || !role) {
      throw new Error("Неправильні параметри для співробітника");
    }
    this.name = name;
    this.role = role;
  }
  work() {
    console.log(`${this.name} працює як ${this.role}`);
  }
}

// =======================================================
// Клас для інвентаризації зоопарку
// =======================================================
class ZooInventory {
  constructor() {
    this.enclosures = [];
    this.employees = [];
  }
  addEnclosure(enclosure) {
    if (!(enclosure instanceof Enclosure)) {
      throw new Error("Неправильний вольєр");
    }
    this.enclosures.push(enclosure);
  }
  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error("Неправильний співробітник");
    }
    this.employees.push(employee);
  }
  showInventory() {
    console.log("=== Інвентаризація зоопарку ===");
    this.enclosures.forEach((enclosure) => {
      enclosure.listAnimals();
      enclosure.listFoods();
    });
    console.log(`Загальна кількість співробітників: ${this.employees.length}`);
    this.employees.forEach((employee) => {
      console.log(`- ${employee.name} (${employee.role})`);
    });
  }
}

// =======================================================
// Головна функція для тестування
// =======================================================
function main() {
  try {
    // Створення тварин та демонстрація їх роботи
    const simba = new Lion("Сімба");
    const dumbo = new Elephant("Дамбо");
    simba.makeSound();
    dumbo.makeSound();

    // Створення корму для тварин
    const meat = new Food("м'ясо", 50);
    const vegetables = new Food("овочі", 30);

    // Створення вольєра та додавання тварин і корму
    const savannah = new Enclosure("Саванна", 2);
    savannah.addAnimal(simba);
    savannah.addAnimal(dumbo);
    savannah.addFood(meat);
    savannah.addFood(vegetables);

    // Тест перевірки переповнення вольєра
    try {
      const extraLion = new Lion("Муфаса");
      savannah.addAnimal(extraLion);
    } catch (error) {
      console.log(`Очікувана помилка: ${error.message}`);
    }

    // Створення співробітників
    const employee1 = new Employee("Іван", "Доглядач");
    const employee2 = new Employee("Оксана", "Ветеринар");

    // Створення системи обліку зоопарку та додавання даних
    const zoo = new ZooInventory();
    zoo.addEnclosure(savannah);
    zoo.addEmployee(employee1);
    zoo.addEmployee(employee2);

    // Виведення інформації про зоопарк
    console.log("\nВивід інформації про зоопарк:\n");
    zoo.showInventory();
  } catch (error) {
    console.log(`Виникла помилка: ${error.message}`);
  }
}

main();
