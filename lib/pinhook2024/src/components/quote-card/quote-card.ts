import styles from "./article-card.css?inline";

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
        <slot name="quote"></slot>
        <slot name="author"></slot>
        <slot name="title"></slot>
      </div>
    `;
  }
}

customElements.define("px-quote-card", QuoteCard);
