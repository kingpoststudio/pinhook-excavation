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
    <div class="bg-iqvia-indigo">
      <px-hero-banner>
        <tui-content slot="content" alignment="start" gap="md">
          <p slot="eyebrow">Central Laboratories</p>
          <h1 slot="title" class="fw-bold">Lorem Ipsum Dolor Sit Amet</h1>
          <p slot="description" class="as-body">
            Short introduction text. Lorem ipsum dolor sit amet consectetur
            adipiscing.
          </p>
          <button slot="cta">Contact Us</button>
        </tui-content>
        <div class="text-iqvia-white" slot="breadcrumbs">
          <a class="theme-iqvia-white" href="#">Home</a>
          <span>/</span>
          <a class="theme-iqvia-white" href="#">Services</a>
          <span>/</span>
          <a class="theme-iqvia-white" href="#">Central Laboratories</a>
          <span>/</span>
          <span class="fw-bold" href="#">Clinical Laboratory Services</span>
        </div>
      </px-hero-banner>
    </div>
  `;
};
