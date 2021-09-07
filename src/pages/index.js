import * as React from 'react';
import { graphql } from 'gatsby';
import HomeHeroBanner from '../components/HomeHeroBanner';
import HomeServices from '../components/HomeServices';
import HomeCompanyBanner from '../components/CompanyBanner';
import ContactForm from '../components/ContactForm';

export default function IndexPage({ data }) {
  console.log(data);
  const { sanityHomepage } = data;
  const { allSanityHomepageServices } = data;
  return (
    <div>
      <HomeHeroBanner
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
        contactFormTitle={sanityHomepage.contactFormTitle}
        contactFormDescription={sanityHomepage.contactFormDescription}
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
