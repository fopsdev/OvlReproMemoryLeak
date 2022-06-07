import { render, TemplateResult } from "lit-html"

export class OvlBaseElement extends HTMLElement {
  async getUI(): Promise<TemplateResult[] | TemplateResult | undefined> {
    return undefined
  }
  async doRender() {
    //each comp renders itself using lit-html
    let res = await this.getUI()
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
