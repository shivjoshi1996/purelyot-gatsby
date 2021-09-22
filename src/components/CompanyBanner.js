import React from 'react';
import styled from 'styled-components';

const StyledCompanyBannerContainer = styled.div`
  background-color: #171717;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #fec5bb;
`;

const StyledCompanyBannerTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const StyledCompanyBannerName = styled.p`
  font-size: 4rem;
  font-family: 'Recoleta', san-serif;
  margin-bottom: 1rem;
`;

const StyledCompanyBannerDescription = styled.p`
  width: 80%;
  margin: 0 auto;
  max-width: 50rem;
`;

export default function HomeCompanyBanner({
  whoWeAreTitle,
  whoWeAreDescription,
  whoWeAreCompanyName,
}) {
  return (
    <StyledCompanyBannerContainer id="who-we-are">
      <StyledCompanyBannerTitle>{whoWeAreTitle}</StyledCompanyBannerTitle>
      <StyledCompanyBannerName>{whoWeAreCompanyName}</StyledCompanyBannerName>
      <StyledCompanyBannerDescription>
        {whoWeAreDescription}
      </StyledCompanyBannerDescription>
    </StyledCompanyBannerContainer>
  );
}
