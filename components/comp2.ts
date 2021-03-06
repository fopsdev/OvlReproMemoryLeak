import { html } from "lit-html"
import { OvlBaseElement } from "../OvlBaseElement"

export class Comp2 extends OvlBaseElement {
  getUI() {
    // also add a few handlers to make the problem more obvious in e.g. chrome memory profiler
    return html`<h1
      style="margin-left:1vw;"
      @click=${(e) => console.log("clicked")}
      @mousedown=${(e) => console.log("mousedown")}
      @mouseup=${(e) => console.log("mouseup")}
    >
      Comp2
    </h1>`
  }
}
