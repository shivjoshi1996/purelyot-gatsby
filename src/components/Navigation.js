import * as React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
  font-family: 'Montserrat', sans-serif;
`;

const StyledLogo = styled.a`
  font-family: 'Recoleta', sans-serif;
`;

function Navigation() {
  return (
    <StyledNavigation>
      <StyledLogo href="/">Purely OT</StyledLogo>
      <ul>
        <li>Services</li>
        <li>Who We are</li>
        <li>Contact us</li>
      </ul>
    </StyledNavigation>
  );
}

export default Navigation;
