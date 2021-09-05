import React from 'react';
import styled from 'styled-components';

const StyledHeroBannerContainer = styled.div`
  background-color: #fec5bb;
  color: #2f2e41;
  padding-bottom: 1.5rem;

  svg {
    width: 100vw;
    min-height: 300px;
  }
`;

const StyledHeroHeading = styled.h2`
  font-size: 2rem;
  padding-bottom: 0.5rem;
`;

const StyledHeroDescription = styled.p`
  line-height: 1.7;
  margin-bottom: 2rem;
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
`;

const StyledHeroFlexContainer = styled.div``;

const StyledHeroBannerContentContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
`;

export default function HomeBanner({
  heroHeading,
  heroDescription,
  heroButtonText,
}) {
  return (
    <StyledHeroBannerContainer>
      <StyledHeroFlexContainer>
        <svg
          width="261"
          height="254"
          viewBox="0 0 261 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="undraw_Hiking_re_k0bc 2" clipPath="url(#clip0)">
            <path
              id="Vector"
              d="M231.781 224.54C231.781 224.54 231.981 220.361 236.071 220.847L231.781 224.54Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_2"
              d="M230.625 220.563C231.756 220.563 232.672 219.647 232.672 218.517C232.672 217.387 231.756 216.47 230.625 216.47C229.495 216.47 228.578 217.387 228.578 218.517C228.578 219.647 229.495 220.563 230.625 220.563Z"
              fill="white"
            />
            <path
              id="Vector_3"
              d="M230.871 221.963H230.293V226.006H230.871V221.963Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_4"
              d="M92.8138 101.675C92.8138 102.698 92.7806 103.713 92.7143 104.719C92.3423 110.523 90.8757 116.204 88.3917 121.463C88.3725 121.508 88.3499 121.55 88.3308 121.592C88.2151 121.835 88.0964 122.079 87.9745 122.32C87.2357 123.807 86.4162 125.253 85.5195 126.651C81.4237 133.068 75.8099 138.378 69.1741 142.111C62.5383 145.845 55.0848 147.886 47.4723 148.056L47.9312 174.441L53.9162 171.29L54.9849 173.321L47.9762 177.01L48.833 226.013L48.8426 226.667L44.2151 227.697L44.2246 227.039L45.6816 148.059C39.5542 147.971 33.5054 146.668 27.8863 144.223C22.2671 141.779 17.1897 138.243 12.9486 133.821C12.6567 133.52 12.3678 133.208 12.0854 132.9C12.0726 132.888 12.063 132.875 12.0533 132.865C8.51976 129.013 5.66203 124.592 3.60055 119.788C3.64552 119.84 3.69361 119.888 3.73859 119.939C-0.920461 109.047 -1.23645 96.7865 2.85537 85.6691C6.9472 74.5518 15.137 65.4198 25.7465 60.1445C25.907 60.0643 26.0707 59.9873 26.2312 59.9071C36.726 54.8534 48.737 53.9261 59.8834 57.309C71.0299 60.6919 80.4982 68.138 86.4116 78.1715C86.6941 78.6463 86.9669 79.1307 87.23 79.6184C90.9033 86.3895 92.8229 93.9721 92.8138 101.675Z"
              fill="white"
            />
            <path
              id="Vector_5"
              d="M86.5675 121.617C120.16 121.617 147.393 94.392 147.393 60.8084C147.393 27.2249 120.16 0 86.5675 0C52.9746 0 25.7422 27.2249 25.7422 60.8084C25.7422 94.392 52.9746 121.617 86.5675 121.617Z"
              fill="#FAE1DD"
            />
            <path
              id="Vector_6"
              opacity="0.2"
              d="M41.6547 20.1932C28.4487 51.0757 42.7854 86.8135 73.6765 100.016C85.3965 105.025 98.3944 106.227 110.835 103.452C123.275 100.677 134.529 94.0655 143.008 84.551C129.803 115.434 94.0558 129.769 63.1638 116.568C32.2718 103.367 17.9333 67.6299 31.1378 36.7464C33.7246 30.6962 37.2764 25.1058 41.6547 20.1932Z"
              fill="black"
            />
            <path
              id="Vector_7"
              d="M89.8574 230.209L83.6445 228.467L83.6574 227.8L85.5186 126.651L85.6117 121.608L85.6149 121.46L85.939 103.789L86.4108 78.1747V78.1715L86.7317 60.8086H86.9018L87.2291 79.6184L87.6559 104.1L87.9608 121.473V121.601L87.9736 122.317V122.32L88.5641 156.183L88.6251 159.548L89.8445 229.535L89.8574 230.209Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_8"
              d="M96.4081 152.054L86.3535 157.346L87.7547 160.007L97.8094 154.715L96.4081 152.054Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_9"
              d="M85.3757 242.45H56.6953V243.092H85.3757V242.45Z"
              fill="white"
            />
            <path
              id="Vector_10"
              d="M138.005 253.358H109.324V254H138.005V253.358Z"
              fill="white"
            />
            <path
              id="Vector_11"
              d="M219.837 245.017H191.156V245.659H219.837V245.017Z"
              fill="white"
            />
            <path
              id="Vector_12"
              d="M206.736 218.91V200.246C206.736 200.246 214.012 213.478 206.736 218.91Z"
              fill="white"
            />
            <path
              id="Vector_13"
              d="M207.186 218.906L193.434 206.285C193.434 206.285 208.104 209.875 207.186 218.906Z"
              fill="white"
            />
            <path
              id="Vector_14"
              d="M64.5742 223.401V204.738C64.5742 204.738 71.8496 217.969 64.5742 223.401Z"
              fill="white"
            />
            <path
              id="Vector_15"
              d="M65.0219 223.398L51.2695 210.776C51.2695 210.776 65.9395 214.367 65.0219 223.398Z"
              fill="white"
            />
            <path
              id="Vector_16"
              d="M113.994 236.876V213.667C113.994 213.667 123.041 230.121 113.994 236.876Z"
              fill="white"
            />
            <path
              id="Vector_17"
              d="M114.552 236.872L97.4512 221.177C97.4512 221.177 115.693 225.641 114.552 236.872Z"
              fill="white"
            />
            <path
              id="Vector_18"
              d="M261.001 234.036L260.825 234.656L206.966 219.32L166.393 228.262L114.505 237.123L114.435 237.103L89.8593 230.209L83.6465 228.467L64.671 223.141L48.8437 226.667L44.2161 227.697L34.1556 229.94L34.0176 229.314L44.2258 227.039L48.834 226.013L64.6903 222.48L64.7673 222.5L83.6593 227.8L89.8465 229.535L114.537 236.465L166.268 227.633L206.985 218.659L207.066 218.679L261.001 234.036Z"
              fill="#1F2232"
            />
            <g id="bird2">
              <path
                id="Vector_19"
                d="M164.643 38.9596L168.749 35.6765C165.56 35.3247 164.249 37.0639 163.713 38.4404C161.221 37.4059 158.508 38.7617 158.508 38.7617L166.723 41.7433C166.309 40.6366 165.587 39.671 164.643 38.9596Z"
                fill="white"
              />
            </g>
            <g id="bird1">
              <path
                id="Vector_20"
                d="M13.8152 37.6763L17.9213 34.3932C14.7315 34.0414 13.4209 35.7806 12.8845 37.1571C10.3925 36.1226 7.67969 37.4784 7.67969 37.4784L15.895 40.46C15.4806 39.3533 14.7591 38.3877 13.8152 37.6763Z"
                fill="white"
              />
            </g>
            <g id="bird3">
              <path
                id="Vector_21"
                d="M155.659 100.237L159.765 96.9535C156.575 96.6017 155.265 98.3408 154.728 99.7174C152.236 98.6829 149.523 100.039 149.523 100.039L157.739 103.02C157.324 101.914 156.603 100.948 155.659 100.237Z"
                fill="white"
              />
            </g>
            <path
              id="Vector_22"
              d="M127.771 241.444L130.91 242.609L136.9 231.063L132.268 229.342L127.771 241.444Z"
              fill="#B88C6A"
            />
            <path
              id="Vector_23"
              d="M127.353 240.122L133.533 242.417L133.533 242.417C134.578 242.805 135.425 243.592 135.889 244.605C136.353 245.618 136.396 246.774 136.008 247.818L135.961 247.946L125.842 244.187L127.353 240.122Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_24"
              d="M158.655 244.702L162.003 244.701L163.595 231.792L158.654 231.792L158.655 244.702Z"
              fill="#B88C6A"
            />
            <path
              id="Vector_25"
              d="M158.074 243.609L164.667 243.608H164.668C165.782 243.609 166.85 244.051 167.638 244.839C168.426 245.626 168.869 246.695 168.869 247.809V247.945L158.074 247.946L158.074 243.609Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_26"
              d="M143.327 155.17L144.42 152.986L153.704 157.627L153.431 159.538L155.206 161.858C155.206 161.858 158.21 163.496 157.664 168.956L157.118 174.143L156.435 180.831L161.214 197.348L163.671 219.187L165.446 236.795L156.844 236.386L148.925 207.721L134.999 238.57L125.441 236.113L138.549 205.537L140.187 192.707C140.187 192.707 139.095 185.882 144.283 181.241L143.464 178.784V175.756L140.733 161.312L143.327 155.17Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_27"
              opacity="0.2"
              d="M143.073 186.384L142.764 186.471L148.771 207.765L149.08 207.678L143.073 186.384Z"
              fill="black"
            />
            <path
              id="Vector_28"
              d="M143.602 182.196H156.982V180.831H143.602V182.196Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_29"
              d="M156.982 183.015C157.283 183.015 157.528 182.404 157.528 181.65C157.528 180.896 157.283 180.285 156.982 180.285C156.68 180.285 156.436 180.896 156.436 181.65C156.436 182.404 156.68 183.015 156.982 183.015Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_30"
              d="M157.335 148.745C159.264 145.218 157.967 140.797 154.44 138.869C150.912 136.942 146.49 138.237 144.562 141.764C142.633 145.29 143.93 149.712 147.457 151.639C150.984 153.567 155.407 152.271 157.335 148.745Z"
              fill="#B88C6A"
            />
            <path
              id="Vector_31"
              d="M139.81 142.657C143.367 142.657 146.25 139.774 146.25 136.219C146.25 132.664 143.367 129.781 139.81 129.781C136.254 129.781 133.371 132.664 133.371 136.219C133.371 139.774 136.254 142.657 139.81 142.657Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_32"
              d="M131.639 135.529C131.385 136.382 131.31 137.279 131.42 138.162C131.53 139.045 131.822 139.896 132.278 140.66C132.733 141.425 133.343 142.087 134.067 142.604C134.791 143.122 135.615 143.483 136.486 143.666C137.357 143.85 138.257 143.85 139.128 143.668C139.999 143.486 140.824 143.125 141.549 142.609C142.273 142.092 142.883 141.431 143.34 140.667C143.796 139.903 144.089 139.052 144.2 138.169C143.739 139.718 142.712 141.037 141.323 141.863C139.934 142.69 138.285 142.965 136.703 142.632C135.122 142.3 133.723 141.385 132.785 140.069C131.846 138.753 131.437 137.133 131.639 135.529Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_33"
              d="M157.077 143.234C157.266 144.898 156.9 146.578 156.037 148.013C155.174 149.449 153.862 150.56 152.304 151.174C150.745 151.788 149.028 151.871 147.417 151.41C145.806 150.949 144.393 149.97 143.395 148.625C142.398 147.279 141.872 145.643 141.899 143.968C141.927 142.294 142.506 140.675 143.547 139.363C144.588 138.051 146.033 137.118 147.657 136.711C149.282 136.303 150.996 136.442 152.533 137.106C153.805 136.081 155.382 136.399 156.663 137.481C158.113 138.704 158.543 139.545 159.667 141.557C158.562 141.712 158.182 143.079 157.077 143.234Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_34"
              d="M130.322 165.118C130.403 167.274 130.565 171.519 130.565 171.735C130.565 171.964 133.784 178.627 135.174 181.494V181.496C135.273 181.698 135.362 181.881 135.441 182.043C135.548 182.265 135.717 182.452 135.928 182.582C136.139 182.711 136.382 182.777 136.629 182.773L142.706 182.664C143.04 182.658 143.359 182.523 143.596 182.288C143.833 182.053 143.971 181.735 143.979 181.401L144.657 154.672C144.659 154.584 144.644 154.496 144.611 154.414C144.579 154.332 144.531 154.257 144.469 154.194C144.408 154.131 144.334 154.081 144.253 154.047C144.172 154.012 144.085 153.995 143.996 153.995H136.159C135.828 153.995 135.504 154.088 135.223 154.264C134.943 154.44 134.718 154.691 134.574 154.989L130.812 162.769C130.459 163.5 130.291 164.306 130.322 165.118V165.118Z"
              fill="#FAE1DD"
            />
            <path
              id="Vector_35"
              d="M144.084 179.567C145.644 178.622 147.045 177.439 148.237 176.059C151.006 172.945 152.69 169.018 153.036 164.866C153.345 161.314 152.64 158.673 150.94 157.018C148.78 154.913 145.84 155.219 145.716 155.233L145.584 155.248L143.592 156.933L144.156 157.599L145.938 156.092C146.484 156.064 148.711 156.058 150.338 157.65C151.836 159.114 152.451 161.517 152.166 164.79C151.837 168.743 150.238 172.484 147.607 175.454C146.472 176.766 145.142 177.896 143.663 178.803L144.084 179.567Z"
              fill="#FAE1DD"
            />
            <path
              id="Vector_36"
              d="M132.775 169.412L132.717 169.697L143.335 171.877L143.394 171.593L132.775 169.412Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_37"
              d="M139.776 153.989L139.086 170.88L139.377 170.892L140.066 154.001L139.776 153.989Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_38"
              d="M130.322 165.118C130.404 167.274 130.565 171.519 130.565 171.735C130.565 171.964 133.784 178.627 135.175 181.494L132.583 166.448C132.482 165.869 132.23 165.327 131.852 164.878C131.473 164.428 130.982 164.088 130.428 163.89C130.341 164.293 130.306 164.706 130.322 165.118Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_39"
              d="M146.247 196.651C146.017 196.355 145.855 196.013 145.772 195.648C145.69 195.283 145.688 194.904 145.767 194.538C145.847 194.173 146.005 193.829 146.232 193.531C146.459 193.233 146.748 192.989 147.079 192.815L146.553 186.989L150.016 185.805L150.644 194.043C150.9 194.619 150.935 195.269 150.743 195.869C150.551 196.469 150.146 196.978 149.604 197.3C149.062 197.621 148.421 197.732 147.802 197.613C147.183 197.493 146.63 197.151 146.247 196.651Z"
              fill="#B88C6A"
            />
            <path
              id="Vector_40"
              d="M143.98 161.488C143.913 160.604 144.142 159.722 144.631 158.982C145.12 158.241 145.842 157.685 146.683 157.401C147.424 157.156 148.225 157.156 148.965 157.403C149.758 157.673 150.446 158.185 150.932 158.867C151.417 159.549 151.676 160.367 151.672 161.204L151.931 190.791L145.795 191.013L143.98 161.488Z"
              fill="#CBCBCB"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="261" height="254" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <StyledHeroBannerContentContainer>
          <StyledHeroHeading>{heroHeading}</StyledHeroHeading>
          <StyledHeroDescription>{heroDescription}</StyledHeroDescription>
          <StyledHeroButton>{heroButtonText}</StyledHeroButton>
        </StyledHeroBannerContentContainer>
      </StyledHeroFlexContainer>
    </StyledHeroBannerContainer>
  );
}
