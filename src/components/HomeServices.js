import React from 'react';
import styled from 'styled-components';

const StyledServicesSection = styled.section`
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #2f2e41;
`;

const StyledServicesHeading = styled.h2`
  margin-bottom: 0.5rem;
`;

const StyledServicesDescription = styled.p`
  margin-bottom: 2rem;
  max-width: 30rem;
`;

const StyledServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledServiceItem = styled.div`
  width: 100%;

  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    width: 100%;
  }
`;

const StyledServiceImageWrapper = styled.div`
  height: 200px;
  width: 300px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function HomeServices({
  services,
  servicesTitle,
  servicesDescription,
}) {
  return (
    <StyledServicesSection id="services">
      <StyledServicesHeading>{servicesTitle}</StyledServicesHeading>
      <StyledServicesDescription>
        {servicesDescription}
      </StyledServicesDescription>
      <StyledServicesGrid>
        {services.length > 0
          ? services.map((service) => (
              <StyledServiceItem key={service.serviceTitle}>
                <StyledServiceImageWrapper key={service.serviceTitle}>
                  {service.serviceImage ? (
                    <img
                      src={
                        service.serviceImage.asset.gatsbyImageData.images
                          .fallback.src
                      }
                      alt=""
                    />
                  ) : null}
                </StyledServiceImageWrapper>
                <h3>{service.serviceTitle}</h3>
                <p>{service.serviceDescription}</p>
              </StyledServiceItem>
            ))
          : null}
      </StyledServicesGrid>
    </StyledServicesSection>
  );
}
