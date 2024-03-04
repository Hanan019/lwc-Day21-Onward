import { LightningElement } from "lwc";

export default class DynamicCssUsingQuerySelector extends LightningElement {
  pColor = "chocolate-color";

  addCssHandler(event) {
    //first we hafve to retrieve the element on which we have to apply the css suing query selector
    let element = this.template.querySelector("p");
    element.classList.add("change-border");
  }
  removeCssHandler(event) {
    let element = this.template.querySelector("p");
    element.classList.remove("change-border");
  }
  toggleCssHandler(event) {
    let element = this.template.querySelector("p");
    element.classList.toggle("change-border");
  }
}
