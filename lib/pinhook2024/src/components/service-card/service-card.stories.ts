import { html } from "lit";
import type { Meta } from "@storybook/web-components";

const meta: Meta = {
  title: "Service Card",
  component: "px-service-card",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => {
  return html`
    <div class="grid cols-1 md:cols-3 mx-auto">
      <px-service-card href="#">
        <img slot="media" src="https://picsum.photos/id/153/480/480" alt="Placeholder" />
        <h3 slot="title">Service Title</h3>
      </px-service-card>
      <px-service-card href="#"></px-service-card>
      <px-service-card href="#"></px-service-card>
    </div>
  `;
};
