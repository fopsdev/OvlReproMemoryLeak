import { html } from "lit-html"
import { OvlBaseElement } from "../OvlBaseElement"
import { Comp1 } from "./comp1"

export class ShellComp extends OvlBaseElement {
  comp1Visible: boolean
  getUI() {
    let comp1
    let root = document.getElementById("MyDiv")
    if (root) {
      if (!this.comp1Visible) {
        root.removeChild(document.getElementById("MyComp1"))
      }
      return root
    } else {
      var newDiv = document.createElement("div")
      newDiv.id = "MyDiv"
      var newContent = document.createTextNode("Shell")
      newDiv.appendChild(newContent)
      if (this.comp1Visible) {
        comp1 = new Comp1()
        comp1.id = "MyComp1"
        newDiv.appendChild(comp1)
      }

      return newDiv
    }
  }
  connectedCallback() {
    //simulating a state change which triggers a doRender...
    this.comp1Visible = true
    setTimeout(() => {
      this.comp1Visible = false
      this.doRender()
    }, 3000)
    super.connectedCallback()
  }
}
