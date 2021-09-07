import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #171717;
  text-align: center;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  color: #fec5bb;

  a {
    color: #fec5bb;
    transition: 0.5s;
    text-decoration: none;
  }
  a:hover {
    color: white;
  }
  li {
    padding-bottom: 1rem;
  }
`;

const StyledFooterWrapper = styled.div``;

const StyledFooterLogo = styled.a`
  font-family: 'Recoleta', sans-serif;
  font-size: 1.7rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: block;
`;

const StyledFooterCopyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.8rem;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <StyledFooterLogo href="./">Purely OT</StyledFooterLogo>
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./">Services</a>
          </li>
          <li>
            <a href="./">About Us</a>
          </li>
          <li>
            <a href="./">Contact</a>
          </li>
        </ul>
        <StyledFooterCopyright>
          &#169; 2021 Purely Occupational Therapy Inc.
        </StyledFooterCopyright>
      </div>
    </StyledFooter>
  );
}
