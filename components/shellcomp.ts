import { html } from "lit-html"
import { OvlBaseElement } from "../OvlBaseElement"

export class ShellComp extends OvlBaseElement {
  comp1Visible: boolean
  getUI() {
    let comp1
    if (this.comp1Visible) {
      comp1 = html`<ovl-comp1></ovl-comp1>`
    }
    return html`<div>
      <button
        @click=${(e) => {
          this.comp1Visible = !this.comp1Visible
          this.doRender()
        }}
      >
        Toggle Comp1
      </button>
      ${comp1}
    </div>`
  }
}
