import { render, TemplateResult } from "lit-html"

export class OvlBaseElement extends HTMLElement {
  getUI(): TemplateResult | undefined {
    return undefined
  }
  doRender() {
    //each comp renders itself using lit-html
    let res = this.getUI()
    render(res, this)
  }
  connectedCallback() {
    //initial render of the comp
    this.doRender()
  }
  disconnectedCallback() {
    console.log("disconnect", this.tagName)
    render(undefined, this)
  }
}
