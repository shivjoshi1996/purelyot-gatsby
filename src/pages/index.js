import * as React from 'react';
import { graphql } from 'gatsby';
import HomeBanner from '../components/HomeBanner';
import HomeServices from '../components/HomeServices';

export default function IndexPage({ data }) {
  const { sanityHomepage } = data;
  const { allSanityHomepageServices } = data;
  return (
    <div>
      <HomeBanner
        heroHeading={sanityHomepage.heroHeading}
        heroDescription={sanityHomepage.heroDescription}
        heroButtonText={sanityHomepage.heroButtonText}
      />
      <HomeServices services={allSanityHomepageServices} />
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
    allSanityHomepageServices {
      nodes {
        serviceTitle
        serviceDescription
        serviceImage {
          asset {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`;
