import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const StyledSuccessHeroWrapper = styled.div`
  min-height: 75vh;
  background-color: #fec5bb;
  color: #2f2e41;
`;

const StyledSuccessHeroFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  img {
    height: 200px;
    width: 100%;

    @media (min-width: 768px) {
      order: 1;
    }
  }

  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;

const StyledHeroButton = styled.a`
  background-color: white;
  font-weight: 500;
  padding: 15px 22px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  -webkit-transition: 1s;
  transition: 1s;
  cursor: pointer;
  text-decoration: none;
  color: #2f2e41;

  &:hover {
    background-color: #2f2e41;
    color: #fec5bb;
  }
`;

const StyledSuccessContentWrapper = styled.div``;

export default function SuccessPage({ data }) {
  const { sanitySuccess } = data;
  console.log(sanitySuccess);
  return (
    <StyledSuccessHeroWrapper>
      <StyledSuccessHeroFlexWrapper>
        <img src={sanitySuccess.successImage.asset.url} />
        <StyledSuccessContentWrapper>
          <h1>{sanitySuccess.heroHeading}</h1>
          <p>{sanitySuccess.heroDescription}</p>
          <StyledHeroButton href="/">
            {sanitySuccess.heroButtonText}
          </StyledHeroButton>
        </StyledSuccessContentWrapper>
      </StyledSuccessHeroFlexWrapper>
    </StyledSuccessHeroWrapper>
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
