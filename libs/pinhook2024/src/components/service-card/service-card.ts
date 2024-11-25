import styles from "./service-card.css?inline";

const { LitElement, html, unsafeCSS, property } = window.Lit;

export class ServiceCard extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String }) href = "#";

  render() {
    return html`
      <a class="wrapper" href="${this.href}">
        <div class="media">
          <slot name="media"></slot>
        </div>
        <div class="title">
          <slot name="title"></slot>
        </div>
      </a>
    `;
  }
}

customElements.define("px-service-card", ServiceCard);
