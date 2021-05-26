import { LitElement, html, css } from "lit"
import { customElement } from "lit/decorators.js"

declare global {
  interface HTMLMyCommentMap {
    "my-comment": MyComment
  }
}

@customElement("my-comment")
export class MyComment extends LitElement {
  static styles = css``

  render() {
    return html`<div>TODO: comment</div>`
  }
}
