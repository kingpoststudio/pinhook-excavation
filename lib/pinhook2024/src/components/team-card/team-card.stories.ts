import { html } from "lit";
import type { Meta } from "@storybook/web-components";

const meta: Meta = {
  title: "Team Card",
  component: "px-team-card",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => {
  return html`
    <div class="grid cols-3 mx-auto max-w-snug">
    </div>
  `;
};
