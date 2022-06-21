import { html } from "lit-html"
import { OvlBaseElement } from "../OvlBaseElement"

export class Comp1 extends OvlBaseElement {
  getUI() {
    // also add a few handlers to make the problem more obvious in e.g. chrome memory profiler
    return html`<h1
      @click=${(e) => console.log("clicked")}
      @mousedown=${(e) => console.log("mousedown")}
      @mouseup=${(e) => console.log("mouseup")}
    >
      Comp1
    </h1>`
  }
}
