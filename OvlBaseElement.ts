import { render, TemplateResult } from "lit-html"

export class OvlBaseElement extends HTMLElement {
  async getUI(): Promise<TemplateResult[] | TemplateResult | undefined> {
    return undefined
  }

  constructor() {
    super()
  }
  async doRender() {
    let res = await this.getUI()
    render(res, this)
  }
  connectedCallback() {
    this.doRender()
  }
  disconnectedCallback() {
    console.log("disconnect", this.tagName)
    render(undefined, this)
  }
}
