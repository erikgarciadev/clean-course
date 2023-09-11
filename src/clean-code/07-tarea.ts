//https://gist.github.com/Klerith/8f69dd971ea830497cd3aa49bc9df51a
(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    public inputAttributes: InputAttributes;
    public htmlElement: HtmlElement;
    constructor(value: string, placeholder: string, id: string) {
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.htmlElement = new HtmlElement(id, "input");
    }

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputEvents("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();
