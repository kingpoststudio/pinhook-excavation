import { html } from "lit";
import type { Meta } from "@storybook/web-components";

import "./hero-carousel.js";

import { Default as HeroBanner } from "../../components/hero-banner/hero-banner.stories";

const meta: Meta = {
  title: "Hero Carousel",
  component: "px-hero-carousel",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => {
  return html`
  <px-hero-carousel>
    ${Array.from({ length: 4 }).map(() => HeroBanner())}
  </px-hero-carousel>`;
}
