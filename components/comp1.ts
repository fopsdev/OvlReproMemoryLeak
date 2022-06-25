import { html } from "lit-html"
import { OvlBaseElement } from "../OvlBaseElement"

export class Comp1 extends OvlBaseElement {
  getUI() {
    let comp2 = html`<ovl-comp2></ovl-comp2>`
    // also add a few handlers to make the problem more obvious in e.g. chrome memory profiler
    return html`<div>
      <h1
        @click=${(e) => console.log("clicked")}
        @mousedown=${(e) => console.log("mousedown")}
        @mouseup=${(e) => console.log("mouseup")}
      >
        Comp1
      </h1>
      ${comp2}
    </div>`
  }
}
