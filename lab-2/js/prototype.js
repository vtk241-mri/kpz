// Завдання 4: Прототип
class Virus {
  constructor(name, type, weight, age) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.age = age;
    this.children = [];
  }

  // Метод додавання дітей
  addChild(virus) {
    this.children.push(virus);
  }

  // Метод клонування (глибоке копіювання)
  clone() {
    const cloneVirus = new Virus(this.name, this.type, this.weight, this.age);
    cloneVirus.children = this.children.map((child) => child.clone()); // Рекурсивне клонування дітей
    return cloneVirus;
  }
}

// Створення "сім'ї" вірусів (3 покоління)
const parentVirus = new Virus("Alpha", "Corona", 0.8, 2);
const child1 = new Virus("Beta", "Corona", 0.6, 1);
const child2 = new Virus("Gamma", "Corona", 0.5, 1);
const grandChild1 = new Virus("Delta", "Corona", 0.4, 0.5);
const grandChild2 = new Virus("Epsilon", "Corona", 0.3, 0.4);

child1.addChild(grandChild1);
child2.addChild(grandChild2);
parentVirus.addChild(child1);
parentVirus.addChild(child2);

// Клонування вірусу-батька
const clonedVirus = parentVirus.clone();

// Виведення результату
console.log("===== Завдання 4: Прототип =====");
console.log("Оригінальний вірус:", parentVirus);
console.log("Клонований вірус:", clonedVirus);

// Перевірка глибокого копіювання
console.log("Діти оригіналу:", parentVirus.children);
console.log("Діти клона:", clonedVirus.children);
console.log(
  "Діти оригінального першого потомка:",
  parentVirus.children[0].children
);
console.log("Діти клона першого потомка:", clonedVirus.children[0].children);
