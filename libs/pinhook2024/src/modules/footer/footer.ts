import styles from "./footer.css?inline";
import "./_footer.css";

const { LitElement, html, unsafeCSS } = window.Lit;

export class Footer extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    return html`
    <footer>
      <div class="top">
        <slot name="logo"></slot>
        <slot name="menu"></slot>
      </div>
      <hr />
      <div class="bottom">
        <slot name="legal"></slot>
        <slot name="social"></slot>
      </div>
    </footer>
    `;
  }
}

customElements.define("px-footer", Footer);
