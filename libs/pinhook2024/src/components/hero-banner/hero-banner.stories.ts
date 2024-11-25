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
        <h1 slot="title" class="fw-bold">Groundwork for a Rock-Solid Future.</h1>
        <div slot="description" class="text-md">
          <p>Pinhook Excavation specializes in professional site preparation, land clearing, grading, and foundation excavation tailored to the unique demands of the Appalachian region. With a focus on precision, safety, and efficiency, we deliver dependable solutions for residential, commercial, and industrial projects. Our expertise ensures every project starts on solid ground.</p>
        </div>
        <a class="button" slot="cta">Our Services</a>
      </tui-content>
    </px-hero-banner>
  `;
};
