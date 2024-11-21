import { html } from "lit";
import type { Meta } from "@storybook/web-components";

const meta: Meta = {
  title: "Hero Banner",
  component: "px-hero-banner",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => {
  return html`
    <px-hero-banner overlay>
      <img src="https://picsum.photos/id/153/1920/1080" slot="background" />
      <tui-content slot="content" alignment="start" gap="md">
        <div slot="eyebrow">
          <a href="/" class="text-inherit">Pinhook Excavation</a>
          <span>/</span>
          <span class="fw-bold" href="#">Our Services</span>
        </div>
        <h1 slot="title" class="fw-bold">Lorem Ipsum Dolor Sit Amet</h1>
        <div slot="description" class="text-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero in dui mattis, nec ultricies nunc fermentum.
          </p>
        </div>
        <a class="button" slot="cta">Contact Us</a>
      </tui-content>
    </px-hero-banner>
  `;
};
