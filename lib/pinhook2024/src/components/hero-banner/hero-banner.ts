import styles from "./hero-banner.css?inline";

const { LitElement, html, unsafeCSS, property } = window.Lit;

export class HeroBanner extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Boolean }) condensed = false;

  @property({ type: Boolean }) gradient = false;

  render() {
    return html`
      <div class="wrapper ${this.condensed ? "condensed" : undefined}">
        <div class="background">
          <slot name="background"></slot>
        </div>
        ${this.gradient ? html`<div class="gradient"></div>` : undefined}
        <div class="content">
          <slot name="content"></slot>
          <div class="image">
            <slot name="image"></slot>
          </div>
        </div>
        <div class="breadcrumbs">
          <slot name="breadcrumbs"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("px-hero-banner", HeroBanner);
