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
    <div class="bg-black text-white">
      <px-hero-banner overlay>

        <tui-content slot="content" alignment="start" gap="md">
          <p slot="eyebrow">Central Laboratories</p>
          <h1 slot="title" class="fw-bold">Lorem Ipsum Dolor Sit Amet</h1>
          <div slot="description" class="as-body">
          </div>
          <button slot="cta">Contact Us</button>
        </tui-content>

        <div slot="breadcrumbs">
          <a href="/">Home</a>
          <span>/</span>
          <span class="fw-bold" href="#">Our Services</span>
        </div>

      </px-hero-banner>
    </div>
  `;
};
