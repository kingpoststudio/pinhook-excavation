import { html } from 'lit';

import { Default as Header } from "../modules/header/header.stories.js";
// import { Default as Footer } from "../modules/footer/footer.stories.js";
import { Default as HeroBanner } from "../components/hero-banner/hero-banner.stories.js";
// import { ServiceCards } from "../components/img-card/img-card.stories.js";

export default {
  title: 'Page: Home',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => html`
  ${Header()}

  <main>
    ${HeroBanner()}
  </main>
`;
