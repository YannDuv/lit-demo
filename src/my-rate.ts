import { LitElement, html, css } from "lit"
import { customElement } from "lit/decorators.js"

declare global {
  interface HTMLElementTagNameMap {
    "my-rate": MyRate
  }
}

@customElement("my-rate")
export class MyRate extends LitElement {
  static styles = css``

  render() {
    return html`<div>TODO: rate</div>`
  }
}
