import { render, TemplateResult } from "lit-html"

export class OvlBaseElement extends HTMLElement {
  getUI(): Element | undefined {
    return undefined
  }
  doRender() {
    //each comp renders itself using lit-html
    let res = this.getUI()
    if (res) {
      this.appendChild(res)
    } else {
      this.removeChild(this.firstChild)
    }
  }
  connectedCallback() {
    //initial render of the comp
    this.doRender()
  }
  disconnectedCallback() {
    console.log("disconnect", this.tagName)
  }
}
