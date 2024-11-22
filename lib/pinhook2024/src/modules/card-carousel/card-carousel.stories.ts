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
      <tui-content slot="content" alignment="start" gap="md">
        <px-icon icon="quiltOne" slot="eyebrow"></px-icon>
        <h3 slot="title" class="fw-bold uppercase">Featured Projects</h3>
        <div slot="description" class="as-body">
          <p>Explore our Featured Projects to see Pinhook Excavation in action. From rugged Appalachian terrain to complex site preparations, these highlights showcase our expertise, precision, and commitment to delivering exceptional results. Whether it’s residential, commercial, or specialized excavation, each project reflects our dedication to quality and customer satisfaction.</p>
        </div>
      </tui-content>
      ${Array.from({ length: 4 }).map(() => ArticleCard())}
    </px-card-carousel>
  </tui-container>
  `;
}
