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
    <div class="grid cols-3 mx-auto max-w-snug">
      <px-animate animation="fade-in-bottom" delay="500">
        <px-service-card href="#">
          <img slot="media" src="https://picsum.photos/id/154/480/480" alt="Placeholder" />
          <h3 class="as-h5" slot="title">Service Title</h3>
        </px-service-card>
      </px-animate>
      <px-animate animation="fade-in-bottom" delay="500">
        <px-service-card href="#">
          <img slot="media" src="https://picsum.photos/id/178/480/480" alt="Placeholder" />
          <h3 class="as-h5" slot="title">Service Title</h3>
        </px-service-card>
      </px-animate>
      <px-animate animation="fade-in-bottom" delay="500">
        <px-service-card href="#">
          <img slot="media" src="https://picsum.photos/id/192/480/480" alt="Placeholder" />
          <h3 class="as-h5" slot="title">Service Title</h3>
        </px-service-card>
      </px-animate>
    </div>
  `;
};
