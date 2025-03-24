// ========== Завдання 6 ===========
// Клас LightNode
class LightNode {
  constructor() {
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  get outerHTML() {
    throw new Error("Метод outerHTML має бути реалізований у підкласах");
  }

  get innerHTML() {
    throw new Error("Метод innerHTML має бути реалізований у підкласах");
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

class LightweightHTMLNode extends LightElementNode {
  constructor(
    tagName,
    displayType = "block",
    selfClosing = false,
    classes = []
  ) {
    super(tagName, displayType, selfClosing, classes);
  }

  get outerHTML() {
    return `<${this.tagName}>${this.innerHTML}</${this.tagName}>`;
  }

  get innerHTML() {
    return this.children.length > 0
      ? this.children.map((child) => child.outerHTML).join("")
      : "";
  }
}

async function loadBookText() {
  try {
    const response = await fetch("book.txt");
    return await response.text();
  } catch (error) {
    console.error("Помилка завантаження файлу:", error);
    throw error;
  }
}

async function processBookTextToLightHTML() {
  const bookText = await loadBookText();
  const lines = bookText.split("\n");

  const root = new LightweightHTMLNode("div");

  lines.forEach((line, index) => {
    let node = null;
    if (index === 0 && line.trim().length > 0) {
      node = new LightweightHTMLNode("h1");
    } else if (line.trim().length < 20 && line.trim().length > 0) {
      node = new LightweightHTMLNode("h2");
    } else if (line.startsWith(" ")) {
      node = new LightweightHTMLNode("blockquote");
    } else if (line.trim().length > 0) {
      node = new LightweightHTMLNode("p");
    } else {
      return;
    }
    node.addChild(new LightTextNode(line));
    root.addChild(node);
  });

  const htmlString = root.outerHTML;
  const treeSize = htmlString.length;

  const nodeCount = countNodes(root);

  console.log("\n===== Завдання 5: Легковаговик =====");
  console.log("OuterHTML:\n", htmlString);
  console.log("Кількість вузлів у дереві:", nodeCount);
  console.log("Приблизний розмір HTML-дерева (символів):", treeSize);

  document.querySelector(".book").innerHTML = htmlString;
}

// Рекурсивна функція для підрахунку вузлів у дереві
function countNodes(node) {
  let count = 1;
  node.children.forEach((child) => {
    count += countNodes(child);
  });
  return count;
}

// Запуск основної функції після завантаження сторінки
window.onload = () => {
  processBookTextToLightHTML().catch((err) => console.error(err));
};
