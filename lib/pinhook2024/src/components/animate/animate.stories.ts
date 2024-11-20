import { html } from "lit";

import "../../globals.js";
import "../index.js";

import "./animate.js";

export default {
  title: "Animate",
  component: "iqvia-animate",
  argTypes: {
    animation: {
      control: { type: "select" },
      options: [
        "fade-in",
        "fade-in-bottom",
        "fade-in-left",
        "fade-in-right",
        "fade-in-top",
        "bounce-bottom",
        "flicker",
        "rock",
        "spin",
        "walk",
      ],
    },
  },
};

const Template = ({ animation }: { animation: Animation }) => html`
  <px-animate animation=${animation || "fade-in"}>
    <px-icon icon="logo"></px-icon>
  </px-animate>
`;

export const Default = Template.bind({});
