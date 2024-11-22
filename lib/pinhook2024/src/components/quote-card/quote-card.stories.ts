import { html } from "lit";
import type { Meta } from "@storybook/web-components";

const meta: Meta = {
  title: "Quote Card",
  component: "px-quote-card",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => {
  return html`
  <div class="bg-orange">
    <px-quote-card>
      <px-icon icon="quiltOne" slot="media"></px-icon>
      <p class="text-lg" slot="quote">
        Pinhook Excavation handled the site preparation for our new home with precision and care. They managed every detail, from clearing the land to grading the foundation, ensuring everything was ready on schedule. Their professionalism and expertise gave us confidence throughout the entire process.
      </p>
      <p slot="author" class="text-lg">Bob Happy, <br /><strong>Graham County Homeowner</strong></p>
    </px-quote-card>
  </div>
  `;
};
