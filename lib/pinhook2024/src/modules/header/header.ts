import styles from "./header.css?inline";

import "../nav-desktop/nav-desktop.js";
import "../nav-mobile/nav-mobile.js";

import {
  NAV_MOBILE_OPEN_EVENT,
  NAV_MOBILE_CLOSE_EVENT,
} from "../nav-mobile/nav-mobile.js";

import { HubSpotMenu } from "../../types/hubspot.d";

const { LitElement, html, unsafeCSS, state, ref, createRef } = window.Lit;

const MOBILE_BREAKPOINT = 768;

const NAVIGATION_MENU_LOADED = "NavigationMenuLoaded";

export class Header extends LitElement {
  static styles = unsafeCSS(styles);

  @state() menu: HubSpotMenu | null = null;

  @state() isMobileView = window.innerWidth < MOBILE_BREAKPOINT;

  @state() isMobileMenuOpen = false;

  private headerRef = createRef<HTMLDivElement>();

  timeout: any;

  connectedCallback(): void {
    super.connectedCallback();

    window.addEventListener("resize", () => this.handleResize());
    window.addEventListener("scroll", () => this.toggleBackground());
    window.addEventListener(
      NAV_MOBILE_OPEN_EVENT,
      () => (this.isMobileMenuOpen = true),
    );
    window.addEventListener(
      NAV_MOBILE_CLOSE_EVENT,
      () => (this.isMobileMenuOpen = false),
    );
    window.addEventListener(NAVIGATION_MENU_LOADED, (e: Event) =>
      this.setupMenu(e),
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    window.removeEventListener("resize", () => this.handleResize());
    window.removeEventListener("scroll", () => this.toggleBackground());
    window.removeEventListener(
      NAV_MOBILE_OPEN_EVENT,
      () => (this.isMobileMenuOpen = true),
    );
    window.removeEventListener(
      NAV_MOBILE_CLOSE_EVENT,
      () => (this.isMobileMenuOpen = false),
    );
    window.removeEventListener(NAVIGATION_MENU_LOADED, (e: Event) =>
      this.setupMenu(e),
    );
  }

  private setupMenu(e: Event) {
    const { detail } = e as CustomEvent;

    if (!detail.menu)
      throw new Error(NAVIGATION_MENU_LOADED + ": Menu not found.");

    this.menu = detail.menu;
  }

  private toggleBackground() {
    const headerHeight = this.headerRef.value?.clientHeight;
    if (!headerHeight) return;

    if (window.scrollY > headerHeight / 2)
      this.headerRef.value?.classList.add("scrolled");
    else this.headerRef.value?.classList.remove("scrolled");
  }

  private handleResize() {
    this.isMobileView = window.innerWidth < MOBILE_BREAKPOINT;
    this.isMobileMenuOpen = false;
  }

  private renderNavs() {
    if (!this.menu) return;

    return this.isMobileView
      ? html`<px-nav-mobile .menu=${this.menu}></px-nav-mobile>`
      : html`<px-nav-desktop .menu=${this.menu}></px-nav-desktop>`;
  }

  render() {
    return html`
      <header ${ref(this.headerRef)}>
        <div class="wrapper">
          <div class="logo">
            <a aria-label="Homepage" href="/">
              <slot name="logo"></slot>
            </a>
          </div>

          ${this.renderNavs()}

          <div class="cta">
            <slot name="cta"></slot>
          </div>

          <div class="mobile-actions" ?mobileMenuOpen=${this.isMobileMenuOpen}>
            <slot name="open-mobile-menu"></slot>
            <slot name="close-mobile-menu"></slot>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define("px-header", Header);
