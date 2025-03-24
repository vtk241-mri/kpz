// ========== Завдання 5 ===========
class LightNode {
  constructor() {
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  get outerHTML() {
    throw new Error("outerHTML має бути реалізований у підкласах.");
  }

  get innerHTML() {
    throw new Error("innerHTML має бути реалізований у підкласах.");
  }
}

class LightTextNode extends LightNode {
  constructor(text) {
    super();
    this.text = text;
  }

  get outerHTML() {
    return this.text;
  }

  get innerHTML() {
    return this.text;
  }
}

class LightElementNode extends LightNode {
  constructor(
    tagName,
    displayType = "block",
    selfClosing = false,
    classes = []
  ) {
    super();
    this.tagName = tagName;
    this.displayType = displayType;
    this.selfClosing = selfClosing;
    this.classes = classes;
  }

  get outerHTML() {
    const classAttribute = this.classes.length
      ? ` class="${this.classes.join(" ")}"`
      : "";
    if (this.selfClosing) {
      return `<${this.tagName}${classAttribute} />`;
    } else {
      return `<${this.tagName}${classAttribute}>${this.innerHTML}</${this.tagName}>`;
    }
  }

  get innerHTML() {
    return this.children.map((child) => child.outerHTML).join("");
  }
}

// === Тестування ===
console.log("\n===== Завдання 5: Компонувальник =====");

const body = new LightElementNode("body", "block");

const div = new LightElementNode("div", "block");
div.classes.push("container");

const h1 = new LightElementNode("h1", "block");
const text = new LightTextNode("Це завдання 5: Компонувальник!");

const p = new LightElementNode("p", "block");
const pText = new LightTextNode("Це текст до завдання 5: Компонувальник!");

h1.addChild(text);
p.addChild(pText);
div.addChild(h1);
div.addChild(p);
body.addChild(div);

console.log(body.outerHTML);

document.querySelector(".task5").innerHTML = body.outerHTML;
