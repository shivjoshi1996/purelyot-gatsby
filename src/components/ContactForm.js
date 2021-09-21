import React from 'react';
import styled from 'styled-components';

const StyledContactFormWrapper = styled.div`
  background-color: #fec5bb;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: #2f2e41;

  h2 {
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 30rem;
    margin-bottom: 2rem;
  }
`;

const StyledContactHeadingWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 80rem;
`;

const StyledContactForm = styled.form`
  width: 90%;
  margin: 0 auto;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 auto;

  label {
    font-size: 1.2rem;
    font-family: 'recoleta', sans-serif;
    margin-bottom: 0.5rem;
  }

  input[type='text'],
  input[type='email'] {
    width: 100%;
    border: none;
    background-color: #fec5bb;
    border-bottom: 1px solid white;
    height: 30px;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: #2f2e41;
  }

  textarea {
    margin-top: 1rem;
    width: 100%;
    height: 100px;
    border: none;
    background-color: #fec5bb;
    border-bottom: 1px solid white;
    resize: none;
    font-size: 1rem;
    color: #2f2e41;
  }
`;

const StyledButtonWrapper = styled.div`
  text-align: left;
  margin-top: 3rem;

  input[type='submit'] {
    background-color: white;
    border: none;
    padding: 0.8rem 3rem;
    border-radius: 10px;
    font-size: 1.2rem;
    transition: 1s;
    cursor: pointer;
    color: #2f2e41;

    &:hover {
      background-color: #2f2e41;
      color: #fec5bb;
    }
  }
`;

export default function ContactForm({
  contactFormTitle,
  contactFormDescription,
}) {
  return (
    <StyledContactFormWrapper>
      <StyledContactHeadingWrapper>
        <h2>{contactFormTitle}</h2>
        <p>{contactFormDescription}</p>
      </StyledContactHeadingWrapper>

      <StyledContactForm
        method="post"
        action="/success"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
        <StyledButtonWrapper>
          <input type="submit" value="Submit" />
        </StyledButtonWrapper>
      </StyledContactForm>
    </StyledContactFormWrapper>
  );
}
