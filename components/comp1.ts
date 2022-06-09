import { OvlBaseElement } from "../OvlBaseElement"

export class Comp1 extends OvlBaseElement {
  getUI() {
    var newDiv = document.createElement("div")
    var newContent = document.createTextNode("Hi from Comp1")
    newDiv.appendChild(newContent) // füge den Textknoten zum neu erstellten div
    return newDiv
  }
}
