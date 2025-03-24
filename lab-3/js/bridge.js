// ========== Завдання 3 ===========
// Інтерфейс рендерингу
class Renderer {
  render(shape) {
    throw new Error("Метод render() має бути реалізований у підкласах");
  }
}

// Векторний рендерер
class VectorRenderer extends Renderer {
  render(shape) {
    console.log(`Drawing ${shape.name} as vector graphics`);
  }
}

// Растровий рендерер
class RasterRenderer extends Renderer {
  render(shape) {
    console.log(`Drawing ${shape.name} as pixels`);
  }
}

// Базовий клас фігури
class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }

  draw() {
    this.renderer.render(this);
  }
}

// Дочірні класи фігур
class Circle extends Shape {
  constructor(renderer) {
    super(renderer);
    this.name = "Circle";
  }
}

class Square extends Shape {
  constructor(renderer) {
    super(renderer);
    this.name = "Square";
  }
}

class Triangle extends Shape {
  constructor(renderer) {
    super(renderer);
    this.name = "Triangle";
  }
}

// === Тестування ===
console.log("\n===== Завдання 3: Міст =====");

const vectorRenderer = new VectorRenderer();
const rasterRenderer = new RasterRenderer();

const vectorCircle = new Circle(vectorRenderer);
const rasterSquare = new Square(rasterRenderer);
const vectorTriangle = new Triangle(vectorRenderer);

vectorCircle.draw();
rasterSquare.draw();
vectorTriangle.draw();
