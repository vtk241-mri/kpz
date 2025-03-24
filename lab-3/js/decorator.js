// ========== Завдання 2 ===========
// Базовий клас героя
class Hero {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.attackPower = 10;
    this.defense = 5;
  }

  getStats() {
    return `${this.name} (${this.type}) -> Атака: ${this.attackPower}, Захист: ${this.defense}`;
  }
}

// Декоратори для екіпіровки
class WeaponDecorator {
  constructor(hero) {
    this.hero = hero;
  }

  getStats() {
    return `${this.hero.getStats()} + [Зброя: +10 атаки]`;
  }

  get attackPower() {
    return this.hero.attackPower + 10;
  }
}

class ArmorDecorator {
  constructor(hero) {
    this.hero = hero;
  }

  getStats() {
    return `${this.hero.getStats()} + [Броня: +5 захисту]`;
  }

  get defense() {
    return this.hero.defense + 5;
  }
}

class ArtifactDecorator {
  constructor(hero) {
    this.hero = hero;
  }

  getStats() {
    return `${this.hero.getStats()} + [Артефакт: +5 атаки, +5 захисту]`;
  }

  get attackPower() {
    return this.hero.attackPower + 5;
  }

  get defense() {
    return this.hero.defense + 5;
  }
}

// === Тестування ===
console.log("\n===== Завдання 2: Декоратор =====");
let warrior = new Hero("Джу", "Warrior");
console.log(warrior.getStats());

warrior = new WeaponDecorator(warrior);
console.log(warrior.getStats());

warrior = new ArmorDecorator(warrior);
console.log(warrior.getStats());

warrior = new ArtifactDecorator(warrior);
console.log(warrior.getStats());

let mage = new Hero("Ельнаре", "Mage");
mage = new ArtifactDecorator(new WeaponDecorator(mage));
console.log(mage.getStats());
