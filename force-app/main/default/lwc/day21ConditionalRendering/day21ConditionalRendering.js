import { LightningElement } from "lwc";

export default class Day21ConditionalRendering extends LightningElement {
  displayMessage = false;

  changeHandler(event) {
    //toggle Handling iin JS
    this.displayMessage = !this.displayMessage; //! is for rendering and reversing the previous value is the checkbox
  }
}
