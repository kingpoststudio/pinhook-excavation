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
          <span class="fw-bold" href="#">Pinhook Excavation</span>
        </div>
        <h1 slot="title" class="fw-bold">Groundwork for a Rock-Solid Future</h1>
        <div slot="description" class="text-md">
          <p>Specializing in site preparation, foundational work, gravel roads, and more, we deliver professional results with a commitment to integrity and precision.</p>
        </div>
        <a slot="cta" class="button" href="/services">Our Services</a>
      </tui-content>
    </px-hero-banner>
  `;
};
