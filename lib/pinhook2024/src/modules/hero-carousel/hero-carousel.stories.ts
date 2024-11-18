import { html } from "lit";
import type { Meta } from "@storybook/web-components";

const meta: Meta = {
  title: "Hero Carousel",
  component: "px-hero-carousel",
};

export default meta;

export const Default = () => {
  return html`<px-hero-carousel></px-hero-carousel>`;
}
