import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  fullDescription: string[];
  additionalImages: string[];
  githubUrl?: string;
  liveUrl?: string;
  challenges?: string[];
  solutions?: string[];
  technologies?: string[];
  outcomes?: string[];
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Default values for new properties
  const githubUrl = project.githubUrl || "https://github.com";
  const liveUrl = project.liveUrl || null;
  const challenges = project.challenges || [
    "Handling large datasets efficiently",
    "Creating intuitive visualizations for complex data",
    "Ensuring cross-platform compatibility"
  ];
  const solutions = project.solutions || [
    "Implemented data chunking and lazy loading techniques",
    "Used advanced visualization libraries with custom configurations",
    "Extensive testing across different devices and browsers"
  ];
  const technologies = project.technologies || project.tags;
  const outcomes = project.outcomes || [
    "Improved decision-making efficiency by 30%",
    "Reduced data processing time by 25%",
    "Enhanced user engagement with interactive visualizations"
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
          <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px]  rounded-lg mb-6"
          />
          
          <div className="prose max-w-none mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Overview</h3>
            <p className="text-gray-700 text-lg">{project.fullDescription.map((desc, index) => (
            <p key={index}>{desc}</p>  // This will display each part of the fullDescription array
                ))} </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Challenges</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Solutions</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Outcomes & Impact</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {outcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {project.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} detail ${index + 1}`}
                className="w-full h-48 rounded-lg"
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github size={20} />
              View on GitHub
            </a>
            
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}