import * as React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  background-color: #fec5bb;
  min-height: 10vh;
  padding: 2rem;
`;

const StyledLogo = styled.a`
  font-family: 'Recoleta', sans-serif;
  text-decoration: none;
  color: #2f2e41;
  font-size: 1.5rem;
  font-weight: 600;
`;

const StyledNavigationLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #2f2e41;
  }
`;

function Navigation() {
  return (
    <StyledNavigation>
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
    </StyledNavigation>
  );
}

export default Navigation;
