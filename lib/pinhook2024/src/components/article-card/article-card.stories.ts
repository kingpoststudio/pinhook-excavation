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
    <div class="grid cols-1 md:cols-3 mx-auto">
      <px-article-card href="#"></px-article-card>
      <px-article-card href="#"></px-article-card>
      <px-article-card href="#"></px-article-card>
    </div>
  `;
};
