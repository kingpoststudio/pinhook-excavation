import { InViewMixin } from "../../mixins/in-view";
import styles from "./animate.css?inline";

const { LitElement, html, property, state, unsafeCSS, queryAssignedElements } =
  window.Lit;

export type Animation =
  | "none"
  | "fade-in"
  | "fade-in-bottom"
  | "fade-in-left"
  | "fade-in-right"
  | "fade-in-top"
  | "bounce-bottom"
  | "flicker"
  | "rock"
  | "spin"
  | "walk";

export class Animate extends InViewMixin(LitElement) {
  static styles = unsafeCSS(styles);

  @property({ type: String }) animation: Animation = "fade-in";

  @property({ type: Number }) delay: number = 100;

  @state() isInView: boolean = this.isInView;

  @state() loaded: boolean = false;

  once = true;

  @queryAssignedElements() slottedEls!: Array<HTMLSlotElement | HTMLElement>;

  constructor() {
    super();
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  handleSlotChange() {
    if (!this.slottedEls.length) return;

    const slottedEl = this.slottedEls[0];
    let targetEl: HTMLElement = this.slottedEls[0];

    if (slottedEl instanceof HTMLSlotElement) {
      targetEl = slottedEl.assignedNodes()[0] as HTMLElement;
    }

    if (targetEl instanceof HTMLImageElement) {
      targetEl.addEventListener("load", () => {
        this.loaded = true;
      });
    } else this.loaded = true;
  }

  render() {
    return this.animation === "none"
      ? html` <slot></slot> `
      : html`
          <div
            class="wrapper ${this.isInView && this.loaded
          ? this.animation
          : null}"
            style="animation-delay:${this.delay}ms"
          >
            <slot @slotchange=${this.handleSlotChange}></slot>
          </div>
        `;
  }
}

customElements.define("px-animate", Animate);
