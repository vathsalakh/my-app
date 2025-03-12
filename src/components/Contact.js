// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
`;

export default function Contact() {
  return (
    <ContactContainer>
      <h2 className="text-3xl font-bold text-center text-blue-600">Contact Me</h2>
      <p className="text-lg text-center mt-4">
        You can reach me at <a href="mailto:vathsala@example.com" className="text-blue-500">vathsala@example.com</a> or on LinkedIn.
      </p>
      <p className="text-center mt-2">
        <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500">LinkedIn</a>
      </p>
    </ContactContainer>
  );
}
