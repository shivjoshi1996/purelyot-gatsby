import * as React from 'react';
import { graphql } from 'gatsby';
import HomeBanner from '../components/HomeBanner';

export default function IndexPage({ data }) {
  const { sanityHomepage } = data;
  return (
    <div>
      <HomeBanner
        heroHeading={sanityHomepage.heroHeading}
        heroDescription={sanityHomepage.heroDescription}
        heroButtonText={sanityHomepage.heroButtonText}
      />
    </div>
  );
}

export const query = graphql`
  query {
    sanityHomepage {
      heroButtonText
      heroDescription
      heroHeading
    }
  }
`;
