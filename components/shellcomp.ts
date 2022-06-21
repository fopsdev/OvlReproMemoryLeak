import { html } from "lit-html"
import { OvlBaseElement } from "../OvlBaseElement"

export class ShellComp extends OvlBaseElement {
  comp1Visible: boolean
  comp1ShowDurationMs: number
  getUI() {
    let comp1
    if (this.comp1Visible) {
      comp1 = html`<ovl-comp1></ovl-comp1>`
    }
    return html`<div>
      <div>Shell</div>
      ${comp1}
    </div>`
  }
  connectedCallback() {
    this.comp1ShowDurationMs = 7000
    setTimeout(() => {
      this.comp1Toggler()
    }, this.comp1ShowDurationMs)
    super.connectedCallback()
  }
  comp1Toggler() {
    this.comp1ShowDurationMs = this.comp1ShowDurationMs / 2
    if (this.comp1ShowDurationMs < 1000) {
      this.comp1ShowDurationMs = 1000
    }
    this.comp1Visible = !this.comp1Visible
    this.doRender()
    setTimeout(() => {
      this.comp1Toggler()
    }, this.comp1ShowDurationMs)
  }
}
