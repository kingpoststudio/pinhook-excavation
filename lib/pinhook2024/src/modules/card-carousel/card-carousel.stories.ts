import { html } from "lit";
import type { Meta } from "@storybook/web-components";

import "./card-carousel.js";

import { Default as ArticleCard } from "../../components/article-card/article-card.stories.js";

const meta: Meta = {
  title: "Card Carousel",
  component: "px-card-carousel",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => {
  return html`
  <px-card-carousel>
    ${Array.from({ length: 4 }).map(() => ArticleCard())}
  </px-card-carousel>`;
}
