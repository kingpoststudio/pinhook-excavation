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
  <tui-container>
    <px-card-carousel>
      <h4 slot="title" class="fw-bold uppercase">Related Projects</h4>
      ${Array.from({ length: 4 }).map(() => ArticleCard())}
    </px-card-carousel>
  </tui-container>
  `;
}
