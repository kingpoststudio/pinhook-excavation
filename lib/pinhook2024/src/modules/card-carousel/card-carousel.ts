import { register, SwiperContainer } from "swiper/element/bundle";
import { SwiperOptions } from "swiper/types";

import styles from "./card-carousel.css?inline";

const {
  LitElement,
  html,
  unsafeCSS,
  queryAssignedElements,
  createRef,
  ref,
} = window.Lit;

export class CardCarousel extends LitElement {
  static styles = unsafeCSS(styles);

  swiperRef = createRef<SwiperContainer>();

  @queryAssignedElements() slottedCards!: HTMLElement[];

  constructor() {
    super();
    register();
  }

  private initSwiper() {
    const { value: swiper } = this.swiperRef;
    if (!swiper) return;

    const swiperId = `article-carousel-${this.id}`;

    const params: SwiperOptions = {
      eventsPrefix: `${swiperId}-`,
      autoHeight: true,
      autoplay: {
        delay: 7000,
      },
      slidesPerView: 1,
      pagination: {
        enabled: true,
        clickable: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      injectStyles: [
        `
        .swiper {
          overflow: visible;
        }
        .swiper-pagination {
          box-sizing: border-box;
          bottom: var(--space-md) !important;
          left: 50% !important;
          transform: translateX(-50%);
          width: 100%;
          max-width: var(--page-max-width);
          padding-inline: var(--space-xl);
          text-align: left;
        }
        .swiper-pagination-bullet {
          border: 0.25rem solid var(--color-white);
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active {
          background: var(--color-white);
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

    setTimeout(() => swiper.initialize(), 100);
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="header">
          <slot name="title"></slot>
        </div>

        <swiper-container ${ref(this.swiperRef)} init="false">
        </swiper-container>

        <slot name="action"></slot>
      </div>

      <slot @slotchange=${this.initSwiper}></slot>
    `;
  }
}

customElements.define("px-card-carousel", CardCarousel);
