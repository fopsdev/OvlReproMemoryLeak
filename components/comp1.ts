import { html } from "lit-html"
import { OvlBaseElement } from "../OvlBaseElement"

export class Comp1 extends OvlBaseElement {
  getUI() {
    return html`<h1>Comp1</h1>`
  }
}
