import { html, render } from "lit-html"
import { Comp1 } from "./components/comp1"
import { ShellComp } from "./components/shellcomp"

console.log("start")
customElements.define("ovl-shell", ShellComp)
customElements.define("ovl-comp1", Comp1)

// // tried to get debug msgs but it didn't work. most probably my bad but i couldn't find docs on that as well...
// //@ts-ignore
// window.emitLitDebugLogEvents = true
// //@ts-ignore
// window.DEV_MODE = true

render(html`<ovl-shell></ovl-shell>`, document.getElementById("app"))
