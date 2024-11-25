import { html } from "lit";
import type { Meta } from "@storybook/web-components";

const meta: Meta = {
  title: "Article Card",
  component: "px-article-card",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => {
  return html`
    <px-article-card href="#">
      <img slot="media" src="https://picsum.photos/id/352/480/480" alt="Placeholder" />
      <h4 slot="title" class="as-h5">Lorem Ipsum Dolor Sit Amet</h4>
      <p slot="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        convallis libero in dui mattis, nec ultricies nunc fermentum.
      </p>
    </px-article-card>
  `;
};
