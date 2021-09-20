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

    @media (min-width: 768px) {
      padding: unset;
      margin-left: 3%;
    }
  }

  ul {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 70%;
    }
  }
`;

const StyledFooterWrapper = styled.div`
  @media (min-width: 768px) {
    max-width: 80rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    padding-top: 2rem;
  }
`;

const StyledFooterLogo = styled.a`
  font-family: 'Recoleta', sans-serif;
  font-size: 1.7rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: block;

  @media (min-width: 768px) {
    padding: unset;
    width: 30%;
    text-align: left;
  }
`;

const StyledFooterCopyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    margin: unset;
    padding-top: 1rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
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
      </StyledFooterWrapper>
    </StyledFooter>
  );
}
