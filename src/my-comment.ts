import { LitElement, html, css } from "lit"
import { customElement, property, query } from "lit/decorators.js"
import { ifDefined } from "lit/directives/if-defined"

declare global {
  interface HTMLMyCommentMap {
    "my-comment": MyComment
  }
}

@customElement("my-comment")
export class MyComment extends LitElement {
  static styles = css``

  @property({ type: String })
  name?: string

  @query("textarea")
  textArea?: HTMLTextAreaElement

  get value() {
    return this.textArea?.value ?? ""
  }

  handleChange() {
    this.dispatchEvent(
      new CustomEvent<{ value: string }>("onchange", {
        detail: { value: this.value },
      })
    )
  }

  render() {
    return html`<div>
      <label>
        ${this.name}:
        <textarea
          name=${ifDefined(this.name)}
          @input=${this.handleChange}
          required
        ></textarea>
      </label>
      <b>${this.value}</b>
    </div>`
  }
}
