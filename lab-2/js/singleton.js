<<<<<<< HEAD
// Завдання 3: Одинак
class Authenticator {
  constructor() {
    if (!Authenticator.instance) {
      this.token = Math.random().toString(36).substr(2);
      Authenticator.instance = this;
    }
    return Authenticator.instance;
  }
}

// Тестування одинака
console.log("===== Завдання 3: Одинак =====");
const auth1 = new Authenticator();
const auth2 = new Authenticator();
console.log(auth1 === auth2);
=======
// Завдання 3: Одинак
class Authenticator {
  constructor() {
    if (!Authenticator.instance) {
      this.token = Math.random().toString(36).substr(2);
      Authenticator.instance = this;
    }
    return Authenticator.instance;
  }
}

// Тестування одинака
console.log("===== Завдання 3: Одинак =====");
const auth1 = new Authenticator();
const auth2 = new Authenticator();
console.log(auth1 === auth2);
>>>>>>> e41b6d9577a8c4db68d123b822620929baf263b7
