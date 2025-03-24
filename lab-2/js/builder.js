<<<<<<< HEAD
// Завдання 5: Будівельник
// Базовий клас персонажа
class Character {
  constructor() {
    this.height = null;
    this.bodyType = null;
    this.hairColor = null;
    this.eyeColor = null;
    this.clothing = null;
    this.inventory = [];
    this.alignment = null;
    this.actions = [];
  }

  // Вивід інформації про персонажа
  showInfo() {
    console.log(`Персонаж:`);
    console.log(`Зріст: ${this.height}`);
    console.log(`Статура: ${this.bodyType}`);
    console.log(`Колір волосся: ${this.hairColor}`);
    console.log(`Колір очей: ${this.eyeColor}`);
    console.log(`Одяг: ${this.clothing}`);
    console.log(`Інвентар: ${this.inventory.join(", ")}`);
    console.log(`Сторона: ${this.alignment}`);
    console.log(`Дії: ${this.actions.join(", ")}`);
    console.log("=====================================");
  }
}

// Інтерфейс будівельника
class CharacterBuilder {
  constructor() {
    this.character = new Character();
  }

  setHeight(height) {
    this.character.height = height;
    return this;
  }

  setBodyType(bodyType) {
    this.character.bodyType = bodyType;
    return this;
  }

  setHairColor(hairColor) {
    this.character.hairColor = hairColor;
    return this;
  }

  setEyeColor(eyeColor) {
    this.character.eyeColor = eyeColor;
    return this;
  }

  setClothing(clothing) {
    this.character.clothing = clothing;
    return this;
  }

  addInventoryItem(item) {
    this.character.inventory.push(item);
    return this;
  }

  setAlignment(alignment) {
    this.character.alignment = alignment;
    return this;
  }

  addAction(action) {
    this.character.actions.push(action);
    return this;
  }

  build() {
    return this.character;
  }
}

// Будівельник Героя
class HeroBuilder extends CharacterBuilder {
  constructor() {
    super();
    this.setAlignment("Добро");
  }

  addHeroicAction(action) {
    this.character.actions.push(`${action}`);
    return this;
  }
}

// Будівельник Ворога
class EnemyBuilder extends CharacterBuilder {
  constructor() {
    super();
    this.setAlignment("Зло");
  }

  addEvilAction(action) {
    this.character.actions.push(`${action}`);
    return this;
  }
}

// Директор для створення персонажів
class CharacterDirector {
  static createHero(builder) {
    return builder
      .setHeight("180 см")
      .setBodyType("Атлет")
      .setHairColor("Чорний")
      .setEyeColor("Синій")
      .setClothing("Лицарські обладунки")
      .addInventoryItem("Меч")
      .addInventoryItem("Щит")
      .addHeroicAction("Рятує людей")
      .addHeroicAction("Бореться зі злом")
      .build();
  }

  static createEnemy(builder) {
    return builder
      .setHeight("190 см")
      .setBodyType("Міцний")
      .setHairColor("Сивий")
      .setEyeColor("Червоний")
      .setClothing("Темний плащ")
      .addInventoryItem("Отруєний кинджал")
      .addInventoryItem("Темна магія")
      .addEvilAction("Грабує села")
      .addEvilAction("Створює армію монстрів")
      .build();
  }
}

// 🎬 Тестування
console.log("===== Завдання 5: Будівельник =====");
const hero = CharacterDirector.createHero(new HeroBuilder());
const enemy = CharacterDirector.createEnemy(new EnemyBuilder());

hero.showInfo();
enemy.showInfo();
=======
// Завдання 5: Будівельник
// Базовий клас персонажа
class Character {
  constructor() {
    this.height = null;
    this.bodyType = null;
    this.hairColor = null;
    this.eyeColor = null;
    this.clothing = null;
    this.inventory = [];
    this.alignment = null;
    this.actions = [];
  }

  // Вивід інформації про персонажа
  showInfo() {
    console.log(`Персонаж:`);
    console.log(`Зріст: ${this.height}`);
    console.log(`Статура: ${this.bodyType}`);
    console.log(`Колір волосся: ${this.hairColor}`);
    console.log(`Колір очей: ${this.eyeColor}`);
    console.log(`Одяг: ${this.clothing}`);
    console.log(`Інвентар: ${this.inventory.join(", ")}`);
    console.log(`Сторона: ${this.alignment}`);
    console.log(`Дії: ${this.actions.join(", ")}`);
    console.log("=====================================");
  }
}

// Інтерфейс будівельника
class CharacterBuilder {
  constructor() {
    this.character = new Character();
  }

  setHeight(height) {
    this.character.height = height;
    return this;
  }

  setBodyType(bodyType) {
    this.character.bodyType = bodyType;
    return this;
  }

  setHairColor(hairColor) {
    this.character.hairColor = hairColor;
    return this;
  }

  setEyeColor(eyeColor) {
    this.character.eyeColor = eyeColor;
    return this;
  }

  setClothing(clothing) {
    this.character.clothing = clothing;
    return this;
  }

  addInventoryItem(item) {
    this.character.inventory.push(item);
    return this;
  }

  setAlignment(alignment) {
    this.character.alignment = alignment;
    return this;
  }

  addAction(action) {
    this.character.actions.push(action);
    return this;
  }

  build() {
    return this.character;
  }
}

// Будівельник Героя
class HeroBuilder extends CharacterBuilder {
  constructor() {
    super();
    this.setAlignment("Добро");
  }

  addHeroicAction(action) {
    this.character.actions.push(`${action}`);
    return this;
  }
}

// Будівельник Ворога
class EnemyBuilder extends CharacterBuilder {
  constructor() {
    super();
    this.setAlignment("Зло");
  }

  addEvilAction(action) {
    this.character.actions.push(`${action}`);
    return this;
  }
}

// Директор для створення персонажів
class CharacterDirector {
  static createHero(builder) {
    return builder
      .setHeight("180 см")
      .setBodyType("Атлет")
      .setHairColor("Чорний")
      .setEyeColor("Синій")
      .setClothing("Лицарські обладунки")
      .addInventoryItem("Меч")
      .addInventoryItem("Щит")
      .addHeroicAction("Рятує людей")
      .addHeroicAction("Бореться зі злом")
      .build();
  }

  static createEnemy(builder) {
    return builder
      .setHeight("190 см")
      .setBodyType("Міцний")
      .setHairColor("Сивий")
      .setEyeColor("Червоний")
      .setClothing("Темний плащ")
      .addInventoryItem("Отруєний кинджал")
      .addInventoryItem("Темна магія")
      .addEvilAction("Грабує села")
      .addEvilAction("Створює армію монстрів")
      .build();
  }
}

// 🎬 Тестування
console.log("===== Завдання 5: Будівельник =====");
const hero = CharacterDirector.createHero(new HeroBuilder());
const enemy = CharacterDirector.createEnemy(new EnemyBuilder());

hero.showInfo();
enemy.showInfo();
>>>>>>> e41b6d9577a8c4db68d123b822620929baf263b7
