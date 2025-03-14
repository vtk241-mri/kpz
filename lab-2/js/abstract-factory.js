// Завдання 2: Абстрактна фабрика
class Laptop {
  constructor(brand) {
    this.brand = brand;
  }
}

class Smartphone {
  constructor(brand) {
    this.brand = brand;
  }
}

class DeviceFactory {
  createLaptop() {
    throw new Error("Метод має бути реалізований у підкласах");
  }
  createSmartphone() {
    throw new Error("Метод має бути реалізований у підкласах");
  }
}

class IProneFactory extends DeviceFactory {
  createLaptop() {
    return new Laptop("IProne");
  }
  createSmartphone() {
    return new Smartphone("IProne");
  }
}

class KiaomiFactory extends DeviceFactory {
  createLaptop() {
    return new Laptop("Kiaomi");
  }
  createSmartphone() {
    return new Smartphone("Kiaomi");
  }
}

class BalaxyFactory extends DeviceFactory {
  createLaptop() {
    return new Laptop("Balaxy");
  }
  createSmartphone() {
    return new Smartphone("Balaxy");
  }
}

// Тестування абстрактної фабрики
console.log("===== Завдання 2: Абстрактна фабрика =====");
const iproneFactory = new IProneFactory();
console.log(iproneFactory.createLaptop());
