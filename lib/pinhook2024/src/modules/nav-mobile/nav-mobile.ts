import { HTMLTemplateResult } from "lit";

import styles from "./nav-mobile.css?inline";
import { HubSpotMenu } from "../../types/hubspot.d";

const { LitElement, html, unsafeCSS, state, property } = window.Lit;

export const NAV_MOBILE_OPEN_EVENT = "NavMobileOpen";
export const NAV_MOBILE_CLOSE_EVENT = "NavMobileClose";
export const NAV_MOBILE_TOGGLE_EVENT = "NavMobileToggle";

class NavMobile extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Object }) menu: HubSpotMenu | undefined;

  @state() isVisible = false;

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener(NAV_MOBILE_OPEN_EVENT, () => this.open());
    window.addEventListener(NAV_MOBILE_CLOSE_EVENT, () => this.close());
    window.addEventListener(NAV_MOBILE_TOGGLE_EVENT, () => {
      if (this.isVisible) this.close();
      else this.open();
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener(NAV_MOBILE_OPEN_EVENT, () => this.open());
    window.removeEventListener(NAV_MOBILE_CLOSE_EVENT, () =>
      this.close(),
    );
    window.removeEventListener(NAV_MOBILE_TOGGLE_EVENT, () => {
      if (this.isVisible) this.close();
      else this.open();
    });
  }

  private open() {
    this.isVisible = true;
  }

  private close() {
    this.isVisible = false;
    this.shadowRoot
      ?.querySelectorAll("li.menu-has-children")
      .forEach((el) => el.removeAttribute("visible"));
  }

  renderMenu() {
    if (!this.menu) return undefined;

    return html`
      <nav role="menu" ?visible=${this.isVisible}>
        <ul>
          ${this.menu.children.map((menu) => this.renderMenuItems(menu))}
        </ul>
      </nav>
    `;
  }

  renderMenuItems(menu: HubSpotMenu): HTMLTemplateResult {
    const hasChildren = menu.children?.length > 0;

    const toggleSubmenu = (e: Event, setVisible: boolean) => {
      const el = e.target as HTMLElement;
      const parentLi = el.closest("li.menu-level-1") as HTMLElement;
      if (setVisible) parentLi.setAttribute("visible", "");
      else parentLi.removeAttribute("visible");
    };

    const renderMenuItemLabel = () => {
      if (hasChildren)
        return html`<span @click=${(e: Event) => toggleSubmenu(e, true)}
          >${menu.label}</span
        >`;
      else if (menu.url) return html`<a href="${menu.url}">${menu.label}</a>`;
      else return html`<span>${menu.label}</span>`;
    };

    return html`
      <li
        class="menu-level-${menu.level}${hasChildren
        ? " menu-has-children"
        : undefined}"
      >
        ${renderMenuItemLabel()}
        ${hasChildren
        ? html`
              <ul>
                ${menu.level === 1
            ? html`<li class="back">
                      <span @click=${(e: Event) => toggleSubmenu(e, false)}>Back</span>
                    </li>`
            : undefined}
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

class NavAction extends LitElement {
  @property({ type: String }) action: "open" | "close" | "toggle" = "open";

  executeAction() {
    if (this.action === "open") {
      window.dispatchEvent(new CustomEvent(NAV_MOBILE_OPEN_EVENT));
    }

    if (this.action === "close") {
      window.dispatchEvent(new CustomEvent(NAV_MOBILE_CLOSE_EVENT));
    }

    if (this.action === "toggle") {
      window.dispatchEvent(new CustomEvent(NAV_MOBILE_TOGGLE_EVENT));
    }
  }

  render() {
    return html` <slot @click=${this.executeAction}></slot> `;
  }
}

customElements.define("px-nav-mobile", NavMobile);
customElements.define("px-nav-action", NavAction);
