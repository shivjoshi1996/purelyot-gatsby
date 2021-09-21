import React from 'react';
import { graphql } from 'gatsby';

export default function SuccessPage({ data }) {
  const { sanitySuccess } = data;
  console.log(sanitySuccess);
  return (
    <>
      <img src={sanitySuccess.successImage.asset.url} />
      <h1>{sanitySuccess.heroHeading}</h1>
      <p>{sanitySuccess.heroDescription}</p>
      <a href="">{sanitySuccess.heroButtonText}</a>
    </>
  );
}

export const query = graphql`
  query {
    sanitySuccess {
      heroButtonText
      heroDescription
      heroHeading
      successImage {
        asset {
          url
        }
      }
    }
  }
`;
