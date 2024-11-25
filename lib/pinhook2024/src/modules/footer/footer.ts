import styles from "./footer.css?inline";

const { LitElement, html, unsafeCSS } = window.Lit;

export class Footer extends LitElement {
  render() {
    return html`
    <footer>
      <div class="top">
        <slot name="logo"></slot>
        <slot name="menu"></slot>
      </div>
      <div class="bottom">
        <slot name="legal"></slot>
        <slot name="social"></slot>
      </div>
    </footer>
    `;
  }
}

customElements.define("px-footer", Footer);
