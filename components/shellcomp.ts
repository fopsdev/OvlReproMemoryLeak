import { html, render } from "lit-html"
import { OvlBaseElement } from "../OvlBaseElement"

export class ShellComp extends OvlBaseElement {
  compVisible: boolean

  getUI() {
    let comp
    if (this.compVisible) {
      comp = html`<ovl-comp1></ovl-comp1>`
    }
    return html`<div>
      <button
        @click=${(e) => {
          this.compVisible = !this.compVisible
          this.doRender()
        }}
      >
        Toggle Visible
      </button>
      <button
        @click=${(e) => {
          setTimeout(() => {
            render(undefined, document.getElementById("app"))
          }, 0)
        }}
      >
        Cleanup Shell
      </button>
      ${comp}
    </div>`
  }
}
