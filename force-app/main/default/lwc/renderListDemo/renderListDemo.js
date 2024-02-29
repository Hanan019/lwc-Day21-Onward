import { LightningElement } from "lwc";

export default class RenderListDemo extends LightningElement {
  superHeros = ["Wolverine", "DeadPool", "Iron Man", "Dr Strange"];

  contactList = [
    {
      id: 1,
      firstName: "Numan",
      lastName: "Ahmed"
    },
    {
      id: 2,
      firstName: "Ahmed",
      lastName: "Muneed"
    },
    {
      id: 3,
      firstName: "Zeeshan",
      lastName: "Ahmed"
    }
  ];
}
