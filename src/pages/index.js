import * as React from 'react';
import { graphql } from 'gatsby';
import HomeHeroBanner from '../components/HomeHeroBanner';
import HomeServices from '../components/HomeServices';
import HomeCompanyBanner from '../components/CompanyBanner';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

export default function IndexPage({ data }) {
  const { sanityHomepage } = data;
  return (
    <div>
      <SEO />
      <HomeHeroBanner
        heroHeading={sanityHomepage.heroHeading}
        heroDescription={sanityHomepage.heroDescription}
        heroButtonText={sanityHomepage.heroButtonText}
      />
      <HomeServices
        services={sanityHomepage.services}
        servicesTitle={sanityHomepage.servicesTitle}
        servicesDescription={sanityHomepage.servicesDescription}
      />
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
      services {
        serviceTitle
        serviceDescription
        serviceImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
