import * as React from 'react';
import { graphql } from 'gatsby';
import HomeBanner from '../components/HomeBanner';
import HomeServices from '../components/HomeServices';
import HomeCompanyBanner from '../components/HomeCompanyBanner';
import ContactForm from '../components/ContactForm';

export default function IndexPage({ data }) {
  console.log(data);
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
      <HomeCompanyBanner
        whoWeAreTitle={sanityHomepage.whoWeAreTitle}
        whoWeAreCompanyName={sanityHomepage.whoWeAreCompanyName}
        whoWeAreDescription={sanityHomepage.whoWeAreDescription}
      />
      <ContactForm
        contactFormTitle={contactFormTitle}
        contactFormDescription={contactFormDescription}
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
      servicesTitle
      servicesDescription
      whoWeAreTitle
      whoWeAreCompanyName
      whoWeAreDescription
      contactFormTitle
      contactFormDescription
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
