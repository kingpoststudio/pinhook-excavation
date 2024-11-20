import { LitElement } from "lit";
import { state, property } from "lit/decorators.js";

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class IsInViewInterface {
  isInView: boolean;
  inViewThreshold: string;
  observer: IntersectionObserver | undefined;
}

export const InViewMixin = <T extends Constructor<LitElement>>(
  superClass: T,
) => {
  class InView extends superClass {
    @property({ type: Boolean }) once = false;

    @property({ type: String, attribute: "in-view-threshold" })
    inViewThreshold = "0.2";

    @state() isInView = false;

    observer: IntersectionObserver | undefined;

    connectedCallback() {
      super.connectedCallback();

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isInView = true;
              if (this.once) this.observer?.unobserve(this);
            } else this.isInView = false;
          });
        },
        { threshold: Number(this.inViewThreshold) },
      );

      this.observer.observe(this);
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      this.observer?.disconnect();
    }
  }

  return InView as Constructor<IsInViewInterface> & T;
};
