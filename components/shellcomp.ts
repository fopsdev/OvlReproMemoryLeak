import { html, render } from "lit-html"
import { OvlBaseElement } from "../OvlBaseElement"

export class ShellComp extends OvlBaseElement {
  compVisible: boolean
  activeComp: "Comp1" | "Comp2"
  getUI() {
    let comp
    if (this.compVisible) {
      if (this.activeComp === "Comp1") {
        comp = html`<ovl-comp1></ovl-comp1>`
      } else {
        comp = html`<ovl-comp2></ovl-comp2>`
      }
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
          if (this.activeComp === "Comp1") {
            this.activeComp = "Comp2"
          } else {
            this.activeComp = "Comp1"
          }
          this.doRender()
        }}
      >
        Toggle Comp
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
      <div>Active Comp: ${this.activeComp} ${comp}</div>
    </div>`
  }
  connectedCallback() {
    this.activeComp = "Comp1"
    super.connectedCallback()
  }
}
