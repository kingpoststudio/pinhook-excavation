import { html } from "lit";
import type { Meta } from "@storybook/web-components";

import { Default as ServiceCards } from "../service-card/service-card.stories";

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

        <img src="https://picsum.photos/id/153/1920/1080" slot="background" />

        <tui-content slot="content" alignment="start" gap="md">
          <p slot="eyebrow">Central Laboratories</p>
          <h1 slot="title" class="fw-bold">Lorem Ipsum Dolor Sit Amet</h1>
          <div slot="description" class="as-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis libero in dui mattis, nec ultricies nunc fermentum.
            </p>
          </div>
          <a class="button" slot="cta">Contact Us</a>
        </tui-content>

        <div slot="breadcrumbs">
          <a href="/" class="text-inherit">Home</a>
          <span>/</span>
          <span class="fw-bold" href="#">Our Services</span>
        </div>

      </px-hero-banner>
    </div>

    <div style="margin-top:-2rem;">
      ${ServiceCards()}
    </div>
  `;
};
