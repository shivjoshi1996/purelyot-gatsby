import * as React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { gsap } from 'gsap';
import { useRef, useEffect, useLayoutEffect } from 'react';

const StyledNavigation = styled.nav`
  width: 100%;
  background-color: #fec5bb;
  @media (min-width: 768px) {
    padding-bottom: 2rem;

    /* a {
      transition: 0.5s;
      &:hover {
        opacity: 0.5;
      } */
    }
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
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .from(q('.logo'), { opacity: 0, duration: 1 })
      .from(q('.link'), { opacity: 0, duration: 1 });
  }, []);

  return (
    <StyledNavigation ref={el}>
      <StyledNavigationWrapper>
        <StyledLogo className="logo" href="/">
          Purely OT
        </StyledLogo>
        <StyledNavigationLinks>
          <li>
            <AnchorLink className="link" to="/#services">
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="link" to="/#who-we-are">
              Who We are
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="link" to="/#contact">
              Contact us
            </AnchorLink>
          </li>
        </StyledNavigationLinks>
      </StyledNavigationWrapper>
    </StyledNavigation>
  );
}

export default Navigation;
