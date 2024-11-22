import styles from "./team-card.css?inline";

const { LitElement, html, unsafeCSS, property } = window.Lit;

export class TeamCard extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
      <div class="wrapper">
        <div class="media">
          <slot name="media"></slot>
        </div>
        <div class="member">
          <slot name="member"></slot>
          <slot name="position"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("px-team-card", TeamCard);
