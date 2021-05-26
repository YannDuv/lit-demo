import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map"

declare global {
  interface HTMLElementTagNameMap {
    "my-rate": MyRate
  }
}

@customElement("my-rate")
export class MyRate extends LitElement {
  @property({ type: Number })
  value?: number

  @property({ type: String })
  label?: string

  @property({ type: Number })
  max!: number

  static styles = css`
    div {
      display: flex;
    }
    svg {
      display: block;
      margin-right: 1rem;
    }
    .active circle {
      fill: orange;
    }
  `

  handleClick(value: number) {
    this.dispatchEvent(
      new CustomEvent("onchange", {
        detail: { value },
      })
    )
    this.value = value
  }

  render() {
    return html`<label
      >${this.label}
      <div>
        ${Array(this.max)
          .fill("x")
          .map((_, index) => {
            return html`<svg
              class=${classMap({
                active: Boolean(this.value && index <= this.value),
              })}
              @click=${() => this.handleClick(index)}
              viewport="0 0 40 40"
              height="40"
              width="40"
            >
              <circle cx="20" cy="20" r="20" fill="gold" />
            </svg>`
          })}
      </div>
    </label>`
  }
}
