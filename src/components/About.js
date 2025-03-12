// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export default function About() {
  return (
    <AboutContainer className="bg-white shadow-lg rounded-lg p-8 mt-8 mx-4">
      <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
      <p className="text-lg text-gray-700 mt-4">
        I am a passionate full-stack developer skilled in modern web technologies. I specialize in building scalable and user-friendly applications using React, Node.js, MongoDB, and more.
      </p>
    </AboutContainer>
  );
}
