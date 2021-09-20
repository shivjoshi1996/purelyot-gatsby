import * as React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  width: 100%;
  background-color: #fec5bb;
  @media (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const StyledNavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 80rem;
  min-height: 10vh;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
`;

const StyledLogo = styled.a`
  font-family: 'Recoleta', sans-serif;
  text-decoration: none;
  color: #2f2e41;
  font-size: 1.5rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

const StyledNavigationLinks = styled.ul`
  display: none;
  list-style: none;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }

  a {
    text-decoration: none;
    color: #2f2e41;
  }
`;

function Navigation() {
  return (
    <StyledNavigation>
      <StyledNavigationWrapper>
        <StyledLogo href="/">Purely OT</StyledLogo>
        <StyledNavigationLinks>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Who We are</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
        </StyledNavigationLinks>
      </StyledNavigationWrapper>
    </StyledNavigation>
  );
}

export default Navigation;
