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
      <img
        slot="logo"
        src="https://www.amadorbioscience.com/hs-fs/hubfs/Web/logo/amador%20bioscience-png.png?width=166&height=64&name=amador%20bioscience-png.png"
      />

      <a slot="cta" class="button" href="#">Contact</a>

      <px-nav-action slot="open-mobile-menu" action="open">
        <px-icon icon="hamburger"></px-icon>
      </px-nav-action>

      <px-nav-action slot="close-mobile-menu" action="close">
        <px-icon icon="cross"></px-icon>
      </px-nav-action>
    </px-header>
  </main>`;
};
