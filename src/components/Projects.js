// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProjectCard = styled.div`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export default function Projects() {
  return (
    <ProjectContainer>
      <h2 className="text-3xl font-bold text-center text-blue-600">Projects</h2>
      <ProjectCard>
        <h3 className="text-2xl font-semibold">Personal Budget Tracker</h3>
        <p className="mt-2 text-gray-700">
          A full-stack application to track your expenses and visualize your financial health.
        </p>
        <div className="mt-4">
          <a href="https://github.com/yourusername/budget-tracker" className="text-blue-500">View Code</a>
          <span className="mx-2">|</span>
          <a href="https://yourliveapp.com" className="text-blue-500">Live Demo</a>
        </div>
      </ProjectCard>
      {/* Repeat similar ProjectCard for other projects */}
    </ProjectContainer>
  );
}
