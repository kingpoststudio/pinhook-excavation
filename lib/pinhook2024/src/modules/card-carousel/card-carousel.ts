import { register, SwiperContainer } from "swiper/element/bundle";
import { SwiperOptions } from "swiper/types";

import styles from "./card-carousel.css?inline";

const {
  LitElement,
  html,
  unsafeCSS,
  state,
  queryAssignedElements,
  createRef,
  ref,
} = window.Lit;

export class CardCarousel extends LitElement {
  static styles = unsafeCSS(styles);

  swiperRef = createRef<SwiperContainer>();

  @state() progress = 0;

  @queryAssignedElements() slottedCards!: HTMLElement[];

  constructor() {
    super();
    register();
  }

  private prev() {
    this.swiperRef.value?.swiper.slidePrev();
  }

  private next() {
    this.swiperRef.value?.swiper.slideNext();
  }

  private initSwiper() {
    const { value: swiper } = this.swiperRef;
    if (!swiper) return;

    const swiperId = `card-carousel-${this.id}`;

    const params: SwiperOptions = {
      eventsPrefix: `${swiperId}-`,
      slidesPerView: "auto",
      spaceBetween: 48,
      scrollbar: true,
      injectStyles: [
        `
        .swiper {
          overflow: visible;
        }
        .swiper-wrapper {
          padding-bottom: var(--space-lg);
        }
      `,
      ],
    };

    Object.assign(swiper, params);

    for (const card of this.slottedCards) {
      const slide = document.createElement("swiper-slide");
      slide.appendChild(card);
      swiper.appendChild(slide);
    }

    setTimeout(() => {
      swiper.initialize();
      swiper.addEventListener(`${swiperId}-progress`, (e: Event) => {
        const { detail } = e as any;
        const [_, progress] = detail;
        this.progress = progress;
      });
    }, 100);
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="header">
          <slot name="content"></slot>
          <div class="actions">
            <button
              class="icon ${this.progress === 0 ? "disabled" : undefined}"
              @click=${() => this.prev()}
            >
              <px-icon icon="arrow"></px-icon>
            </button>
            <button
              class="icon ${this.progress === 1 ? "disabled" : undefined}"
              @click=${() => this.next()}
            >
              <px-icon icon="arrow"></px-icon>
            </button>
          </div>
        </div>

        <swiper-container ${ref(this.swiperRef)} init="false">
        </swiper-container>

        <slot @slotchange=${this.initSwiper}></slot>
      </div>
    `;
  }
}

if (!customElements.get("px-card-carousel")) {
  customElements.define("px-card-carousel", CardCarousel);
}
