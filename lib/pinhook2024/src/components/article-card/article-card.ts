import styles from "./article-card.css?inline";

const { LitElement, html, unsafeCSS, property } = window.Lit;

export class ArticleCard extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String }) href = "#";

  render() {
    return html`
      <a class="wrapper" href="${this.href}">
        <slot name="media"></slot>
        <div class="content">
          <slot name="date"></slot>
          <slot name="title"></slot>
          <slot name="author"></slot>
        </div>
      </a>
    `;
  }
}

customElements.define("px-article-card", ArticleCard);
