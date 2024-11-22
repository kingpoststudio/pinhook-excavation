import styles from "./team-card.css?inline";

const { LitElement, html, unsafeCSS, property } = window.Lit;

export class TeamCard extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String }) href = "#";

  render() {
    return html`
      <a class="wrapper" href="${this.href}">
        <div class="media">
          <slot name="media"></slot>
        </div>
        <div class="member">
          <slot name="member"></slot>
          <slot name="position"></slot>
        </div>
      </a>
    `;
  }
}

customElements.define("px-team-card", TeamCard);
