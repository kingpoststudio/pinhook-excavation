import styles from "./sticky-bar.css?inline";
import "./_sticky-bar.css";

const { LitElement, html, unsafeCSS, property, ref, createRef } = window.Lit;

export class StickyBar extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: String }) target: string = "px-header";

  @property({ type: String }) background: string = "bg-gray";

  wrapperRef = createRef<HTMLDivElement>();

  barRef = createRef<HTMLDivElement>();

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("scroll", () => this.toggleSticky());
    window.removeEventListener("resize", () => this.toggleSticky());
  }

  protected firstUpdated(): void {
    this.toggleSticky();

    window.addEventListener("scroll", () => this.toggleSticky());
    window.addEventListener("resize", () => this.toggleSticky());
  }

  private toggleSticky() {
    const targetEl = document.querySelector(this.target);
    const wrapperEl = this.wrapperRef.value;
    const barEl = this.barRef.value;
    if (!wrapperEl || !barEl) return;

    const wrapperTop = wrapperEl.getBoundingClientRect().top;
    const targetHeight = targetEl?.clientHeight || 0;

    if (wrapperTop < targetHeight) {
      barEl.classList.add("sticky");
      barEl.style.top = `${targetHeight - 1}px`;
    } else {
      barEl.classList.remove("sticky");
      barEl.removeAttribute("style");
    }
  }

  render() {
    return html`
      <div class="wrapper" ${ref(this.wrapperRef)}>
        <div class="bar ${this.background}" ${ref(this.barRef)}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("px-sticky-bar", StickyBar);
