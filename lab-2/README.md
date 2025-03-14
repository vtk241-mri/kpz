# 🔥 Породжувальні шаблони

Мета роботи: навчитися реалізовувати породжувальні шаблони проєктування

Цей проєкт містить реалізацію п’яти шаблонів проєктування:

1. **Фабричний метод (Factory Method)**
2. **Абстрактна фабрика (Abstract Factory)**
3. **Одинак (Singleton)**
4. **Прототип (Prototype)**
5. **Будівельник (Builder)**

Кожен з шаблонів реалізовано згідно з принципами **SOLID**, **DRY**, **KISS** та **YAGNI**.

---

## 📌 1. Фабричний метод (Factory Method)

Створює **підписки** для відео-провайдера через різні канали (`WebSite`, `MobileApp`, `ManagerCall`).

✅ **Принципи:** OCP, SRP, Program to Interfaces  
🔗 Код: [`factory-method.js`](./js/factory-method.js)

---

## 📌 2. Абстрактна фабрика (Abstract Factory)

Дозволяє створювати **девайси** (`Laptop`, `Smartphone`, `EBook`) для різних брендів (`IProne`, `Kiaomi`, `Balaxy`).

✅ **Принципи:** DIP, Program to Interfaces  
🔗 Код: [`abstract-factory.js`](./js/abstract-factory.js)

---

## 📌 3. Одинак (Singleton)

Гарантує, що **аутентифікатор (Authenticator)** має лише один екземпляр у системі.

✅ **Принципи:** SRP, Fail Fast  
🔗 Код: [`singleton.js`](./js/singleton.js)

---

## 📌 4. Прототип (Prototype)

Клас `Virus` дозволяє **клонувати віруси** разом із всіма нащадками.

✅ **Принципи:** DRY, Composition Over Inheritance  
🔗 Код: [`prototype.js`](./js/prototype.js)

---

## 📌 5. Будівельник (Builder)

Класи `HeroBuilder` і `EnemyBuilder` дозволяють **покроково створювати** персонажів гри.

✅ **Принципи:** Fluent Interface, KISS  
🔗 Код: [`builder.js`](./js/builder.js)

---

## 🎨 UML Діаграми

📂 Діаграми UML для кожного завдання знаходяться в каталозі [`diagrams/`](./diagrams/).
