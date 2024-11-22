import { html } from "lit";
import { mockMenu } from "./mocks.js";

import "../../globals.js";
import "../../components";

import "./header.js";

export default {
  title: "Header",
  component: "px-header",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => {
  window.addEventListener("DOMContentLoaded", () => {
    const customEvent = new CustomEvent("NavigationMenuLoaded", {
      detail: { menu: mockMenu },
    });
    window.dispatchEvent(customEvent);
  });

  return html` <main>
    <px-header>
      <a slot="cta" class="button icon theme-white" href="#">
        <px-icon class="contents" icon="facebook"></px-icon>
      </a>

      <px-nav-action slot="open-mobile-menu" action="open">
        <px-icon icon="hamburger"></px-icon>
      </px-nav-action>

      <px-nav-action slot="close-mobile-menu" action="close">
        <px-icon icon="cross"></px-icon>
      </px-nav-action>
    </px-header>
  </main>`;
};
