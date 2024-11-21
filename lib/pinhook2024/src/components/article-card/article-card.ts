import styles from "./article-card.css?inline";

const { LitElement, html, unsafeCSS, property } = window.Lit;

export class ArticleCard extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String }) href = "#";

  render() {
    return html`
      <a class="wrapper" href="${this.href}">
        <div class="media">
          <slot name="media"></slot>
        </div>
        <slot name="title"></slot>
        <slot name="description"></slot>
      </a>
    `;
  }
}

customElements.define("px-article-card", ArticleCard);
