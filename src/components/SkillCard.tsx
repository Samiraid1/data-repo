import React from 'react';

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: React.ReactNode;
}

export function SkillCard({ category, skills, icon }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        <div className="text-blue-600 mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}