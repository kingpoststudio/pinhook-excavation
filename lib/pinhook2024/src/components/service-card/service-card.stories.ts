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
      <px-animate animation="fade-in-bottom" delay="1000">
        <div class="grid cols-1 md:cols-3 mx-auto max-w-snug">
          <px-service-card href="#">
            <img slot="media" src="https://picsum.photos/id/154/480/480" alt="Placeholder" />
            <h4 slot="title">Service Title</h4>
          </px-service-card>
          <px-service-card href="#">
            <img slot="media" src="https://picsum.photos/id/178/480/480" alt="Placeholder" />
            <h4 slot="title">Service Title</h4>
          </px-service-card>
          <px-service-card href="#">
            <img slot="media" src="https://picsum.photos/id/192/480/480" alt="Placeholder" />
            <h4 slot="title">Service Title</h4>
          </px-service-card>
        </div>
      </px-animate>
  `;
};
