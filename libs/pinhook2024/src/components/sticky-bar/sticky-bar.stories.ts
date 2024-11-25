import { html } from "lit";

import "../../globals.js";
import "../index.js";

export default {
  title: "Sticky Bar",
  component: "px-sticky-bar",
};

const Template = () => html`
  <px-sticky-bar>
    <div class="anchor-bar">
      <a href="#services">Services</a>
      <a href="#solutions">Solutions</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <a href="#careers">Careers</a>
      <a href="#news">News</a>
    </div>
  </px-sticky-bar>
`;

export const Default = Template.bind({});
