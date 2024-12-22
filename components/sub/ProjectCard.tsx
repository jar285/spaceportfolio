'use client';

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  projectLink?: string; // Optional link to the project
}

const ProjectCard = ({ src, title, description, projectLink }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative z-[20] rounded-lg shadow-lg border border-gray-700 bg-gray-800 p-6">
      {/* Project Image */}
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-60 object-cover rounded-t-lg mb-6" // Added mb-6 for spacing
      />

      {/* Project Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
        {title}
      </h1>

      {/* Project Description */}
      <p className={`text-gray-300 leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
        {description}
      </p>

      {/* Project Link (visible only when expanded) */}
      {isExpanded && projectLink && (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-blue-400 hover:text-blue-300"
        >
          Visit Project
        </a>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleDescription}
        className="mt-4 text-blue-400 hover:text-blue-300 cursor-pointer focus:outline-none"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ProjectCard;
