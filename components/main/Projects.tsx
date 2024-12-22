'use client';

import React from 'react';
import ProjectCard from '@/components/sub/ProjectCard';

const Projects = () => {
  return (
    <section 
      id="projects"
      className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
        My Projects
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
        <ProjectCard
          src="/companion.png"
          title="Campus Companion"
          description="The ultimate goal for any person entering university is to graduate... The Campus Companion application helps students keep track of their academic progress, manage their schedules, and connect with their peers and professors seamlessly."
          projectLink="https://www.figma.com/design/vIh7oksGDMljicrzth29bm/Campus-Companion?node-id=21911-234988&t=kzwmpy5sgN9hVFLU-1"
        />
        <ProjectCard
          src="/user_management.png"
          title="User Management System"
          description="User Management System, a dynamic web-based application designed to enrich learning and simplify user data management. Features include user registration, profile management, and secure access controls. The system ensures data integrity and security for all users."
          projectLink="https://github.com/jar285/user_management"
        />
        <ProjectCard
          src="/calculator.png"
          title="Advanced Python Calculator"
          description="Development of an advanced Python-based calculator application. Designed to underscore the importance of professional software development practices, the application integrates clean, maintainable code, design patterns, comprehensive logging, and a command-line interface."
          projectLink="https://github.com/jar285/midterm-2024-calc"
        />
        <ProjectCard
          src="/dashboard.png"
          title="Cosmic Connect Dashboard Figma Design"
          description="The Cosmic Connect Dashboard is a sleek and intuitive interface designed for members of a vibrant online community to share, explore, and discover the unknown. It prioritizes user engagement and ease of navigation with minimalist aesthetics, clean typography, and vibrant gradients."
          projectLink="https://www.figma.com/design/jQ8j0DIR8Vdsg82En3yxB2/UI-Project-Draft?node-id=0-1&t=kSCgEiiSLFeSypht-1"
        />
        <ProjectCard
          src="/UFO-Homepage.png"
          title="Cosmic Connect Homepage Figma Design"
          description="The UFO Research Hub homepage is a modern, visually engaging platform designed to connect enthusiasts and researchers with the latest developments in extraterrestrial studies. The layout emphasizes accessibility, structured content, and user engagement"
          projectLink="https://www.figma.com/design/jQ8j0DIR8Vdsg82En3yxB2/UI-Project-Draft?node-id=0-1&t=kSCgEiiSLFeSypht-1"
        />
        <ProjectCard
          src="/cosmic.png"
          title="Cosmic Connect Homepage Frontend Prototype"
          description="Cosmic Connect is a platform designed to fetch and display articles related to UFO sightings and space-related news. It dynamically integrates an external API to provide users with real-time, interactive content.

          🌌 Project Features
          API Integration: Fetches real-time data from the Cosmic Connect API.
          Dynamic Interface: Generates cards with images, titles, and article summaries.
          Responsive Design: Optimized for both mobile and desktop devices.
          Modern Components: Clean and minimalist cards with a sleek layout."
          projectLink='https://github.com/Anneryshc/Final373Cosmic'
        />
      </div>
    </section>
  );
};

export default Projects;
