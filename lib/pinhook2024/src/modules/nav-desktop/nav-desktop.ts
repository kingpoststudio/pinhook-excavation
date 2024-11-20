import { HTMLTemplateResult } from "lit";

import styles from "./nav-desktop.css?inline";
import { HubSpotMenu } from "../../types/hubspot.d";

const { LitElement, html, unsafeCSS, property } = window.Lit;

class NavDesktop extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Object }) menu: HubSpotMenu | undefined;

  renderMenu() {
    if (!this.menu) return undefined;

    return html`
      <nav role="menu">
        <ul>
          ${this.menu.children.map((menu) => this.renderMenuItems(menu))}
        </ul>
      </nav>
    `;
  }

  renderMenuItems(menu: HubSpotMenu): HTMLTemplateResult {
    const hasChildren = menu.children?.length > 0;

    return html`
      <li
        class="menu-level-${menu.level}${hasChildren
        ? " menu-has-children"
        : undefined}"
      >
        ${menu.url
        ? html`<a href="${menu.url}">${menu.label}</a>`
        : html`<span>${menu.label}</span>`}
        ${hasChildren
        ? html`
              <ul>
                ${menu.children.map((child) => this.renderMenuItems(child))}
              </ul>
            `
        : null}
      </li>
    `;
  }

  render() {
    return this.renderMenu();
  }
}

customElements.define("px-nav-desktop", NavDesktop);
