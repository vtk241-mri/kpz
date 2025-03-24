<<<<<<< HEAD
// Завдання 1: Фабричний метод
class Subscription {
  constructor(price, minPeriod, channels) {
    this.price = price;
    this.minPeriod = minPeriod;
    this.channels = channels;
  }
}

class DomesticSubscription extends Subscription {
  constructor() {
    super(10, 6, ["News", "Sports", "Movies"]);
  }
}

class EducationalSubscription extends Subscription {
  constructor() {
    super(15, 12, ["Discovery", "National Geographic", "History"]);
  }
}

class PremiumSubscription extends Subscription {
  constructor() {
    super(25, 24, ["HBO", "Netflix", "Disney+"]);
  }
}

class SubscriptionFactory {
  createSubscription() {
    throw new Error("Метод має бути реалізований у підкласах");
  }
}

class WebSite extends SubscriptionFactory {
  createSubscription(type) {
    switch (type) {
      case "Domestic":
        return new DomesticSubscription();
      case "Educational":
        return new EducationalSubscription();
      case "Premium":
        return new PremiumSubscription();
      default:
        throw new Error("Невідомий тип підписки");
    }
  }
}

class MobileApp extends SubscriptionFactory {
  createSubscription(type) {
    return new WebSite().createSubscription(type);
  }
}

class ManagerCall extends SubscriptionFactory {
  createSubscription(type) {
    return new WebSite().createSubscription(type);
  }
}

// Тестування фабричного методу
console.log("===== Завдання 1: Фабричний метод =====");

const website = new WebSite();
console.log(website.createSubscription("Premium"));
=======
// Завдання 1: Фабричний метод
class Subscription {
  constructor(price, minPeriod, channels) {
    this.price = price;
    this.minPeriod = minPeriod;
    this.channels = channels;
  }
}

class DomesticSubscription extends Subscription {
  constructor() {
    super(10, 6, ["News", "Sports", "Movies"]);
  }
}

class EducationalSubscription extends Subscription {
  constructor() {
    super(15, 12, ["Discovery", "National Geographic", "History"]);
  }
}

class PremiumSubscription extends Subscription {
  constructor() {
    super(25, 24, ["HBO", "Netflix", "Disney+"]);
  }
}

class SubscriptionFactory {
  createSubscription() {
    throw new Error("Метод має бути реалізований у підкласах");
  }
}

class WebSite extends SubscriptionFactory {
  createSubscription(type) {
    switch (type) {
      case "Domestic":
        return new DomesticSubscription();
      case "Educational":
        return new EducationalSubscription();
      case "Premium":
        return new PremiumSubscription();
      default:
        throw new Error("Невідомий тип підписки");
    }
  }
}

class MobileApp extends SubscriptionFactory {
  createSubscription(type) {
    return new WebSite().createSubscription(type);
  }
}

class ManagerCall extends SubscriptionFactory {
  createSubscription(type) {
    return new WebSite().createSubscription(type);
  }
}

// Тестування фабричного методу
console.log("===== Завдання 1: Фабричний метод =====");

const website = new WebSite();
console.log(website.createSubscription("Premium"));
>>>>>>> e41b6d9577a8c4db68d123b822620929baf263b7
