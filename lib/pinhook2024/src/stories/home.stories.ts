import { html } from 'lit';

import { Default as Header } from '../modules/header/header.stories.js';
// import { Default as Footer } from '../modules/footer/footer.stories.js';
import { Default as HeroBanner } from '../components/hero-banner/hero-banner.stories.js';
import { Default as ServiceCards } from '../components/service-card/service-card.stories.js';
import { Default as RelatedArticles } from '../modules/card-carousel/card-carousel.stories.js';

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
    <div style="margin-top:-6rem;">
      ${ServiceCards()}
    </div>
    <div style="padding-block:4rem;">
      ${RelatedArticles()}
    </div>
  </main>
`;
