import React from 'react';
import { Award, BookOpen, Code2, Database } from 'lucide-react';
import { SkillCard } from './SkillCard';

const skills = {
  dataAnalysis: [
    'Data Visualization',
    'Statistical Analysis',
    'Predictive Modeling',
    'A/B Testing',
    'Data Mining',
  ],
  tools: [
    'Python',
    'R',
    'SQL',
    'Tableau',
    'Power BI',
    'Excel',
  ],
  databases: [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'BigQuery',
    'Redshift',
  ],
  softSkills: [
    'Problem Solving',
    'Communication',
    'Project Management',
    'Team Leadership',
    'Stakeholder Management',
  ],
};

export function AboutMe() {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Passionate Data Analyst
              </h3>
              <p className="text-gray-600 mb-6">
                With over 5 years of experience in data analytics, I specialize in transforming complex
                datasets into actionable insights. My expertise lies in developing robust analytical
                solutions that drive business growth and efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            category="Data Analysis"
            skills={skills.dataAnalysis}
            icon={<Database size={24} />}
          />
          <SkillCard
            category="Tools & Languages"
            skills={skills.tools}
            icon={<Code2 size={24} />}
          />
          <SkillCard
            category="Databases"
            skills={skills.databases}
            icon={<BookOpen size={24} />}
          />
          <SkillCard
            category="Soft Skills"
            skills={skills.softSkills}
            icon={<Award size={24} />}
          />
        </div>
      </div>
    </section>
  );
}