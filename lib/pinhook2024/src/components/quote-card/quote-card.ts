import styles from "./quote-card.css?inline";

const { LitElement, html, unsafeCSS, property } = window.Lit;

export class QuoteCard extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String }) href = "#";

  render() {
    return html`
      <div class="wrapper">
        <div class="media">
          <slot name="media"></slot>
        </div>
        <div class="content">
          <slot name="quote"></slot>
          <slot name="author"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("px-quote-card", QuoteCard);
