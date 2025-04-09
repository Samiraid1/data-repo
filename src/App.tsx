import React, { useState, useMemo } from 'react';
import { BarChart2, Github, Linkedin, Mail, Menu, X as CloseIcon } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { AboutMe } from './components/AboutMe';
import { ProjectFilters } from './components/ProjectFilters';
import { DataVizKnowledgeGame } from './components/DataVizKnowledgeGame';
import {ContactForm} from './components/ContactForm'; 
import {Publications} from './components/Publications'; 
import img1 from './images/project1/im3.png';
import img2 from './images/project1/im2.png';
import img3 from './images/project1/im1.png';
import imgp21 from './images/project2/g1.png';
import imgp22 from './images/project2/image 4.png';
import imgp23 from './images/project2/image 5.png';






const projects = [
  {
    id: '1',
    title: 'Assessing Pharmacists Knowledge Through Questionnaire Analysis',
    description: 'Advanced data analysis of Pharmacists Knowledge across different measurement using Python ,MS Excel and Tableau.',
    tags: ['Python', 'Tableau', 'Data Visualization', 'SQL'],
    image: img1,
    fullDescription: ["This project involved conducting data analysis for a Master's student in Pharmacy as part of her thesis on pharmacists' knowledge assessment. The study aimed to evaluate pharmacists' understanding of key pharmaceutical concepts using a structured questionnaire."," I worked with survey data collected from pharmacists at different career stages, applying data cleaning, statistical analysis, and visualization techniques to uncover meaningful insights. The analysis focused on identifying knowledge gaps, trends across experience levels, and key areas for professional development." ,"Using Python (Pandas, NumPy, SciPy, Matplotlib, Seaborn) and MS Excel, I processed the dataset, conducted statistical tests, and generated data-driven visualizations to support the thesis findings. The results provided valuable insights into the strengths and weaknesses in pharmacists' knowledge, contributing to evidence-based recommendations for pharmaceutical education and training programs."],
    additionalImages: [
      img2,img3
    ],
    githubUrl: 'https://github.com/Samiraid1/Assessing-Pharmacists-Knowledge-Through-Questionnaire-Analysis',
    liveUrl: 'https://github.com/Samiraid1/Assessing-Pharmacists-Knowledge-Through-Questionnaire-Analysis',
    challenges: [
      'Handling Diverse Data from Pharmacists at Different Career Stages',
      'Ensuring Data Quality and Consistency Across Responses',
      'Presenting Analytical Findings Clearly for a Thesis Audience'
    ],
    solutions: [
      'Grouped respondents based on career stage and experience levels, and used statistical techniques (e.g., ANOVA, correlation analysis) to analyze patterns and variations in knowledge across these segments.',
      'Applied thorough data cleaning using Pandas and NumPy to address missing values, inconsistent formatting, and outliers. Validated the integrity of the dataset before proceeding to analysis.',
      'Used Matplotlib, Seaborn, and Excel charts to create accessible visualizations. Structured results in a narrative format aligned with academic research standards, making the insights easy to interpret for non-technical readers.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Tableau', 'SQL', 'PostgreSQL', 'Git'],
    outcomes: [
      'Discovered significant trends and knowledge disparities across seniority levels, providing a solid basis for tailored education strategies.',
      'Produced a high-quality, consistent dataset that enabled accurate and reliable insights to be drawn from the survey.',
      'Helped the Pharmacy Master’s student present her findings clearly in her thesis, strengthening her arguments with compelling data visualizations and evidence-based recommendations.'
    ]
  },
  {
    id: '2',
    title: 'Is Experience Enough? Analyzing Pharmacists Knowledge Gaps',
    description: 'Analyzed survey data from 315 pharmacists to assess knowledge trends across different experience levels, focusing on medicine usage and up-to-date pharmaceutical practices.',
    tags: ['Python', 'Scikit-learn', 'Excel', 'Pandas','Data Visualization'],
    image: imgp21,
    fullDescription: ["In this data analytics project, I analyzed responses from a questionnaire completed by 315 pharmacists to assess their knowledge across varying levels of seniority and years of experience. The questionnaire focused on the correct use and application of different medicines, aiming to evaluate whether pharmacists knowledge aligns with current pharmaceutical standards and practices.","My role involved cleaning and analyzing the dataset, performing statistical comparisons between experience groups, and generating insightful visualizations to highlight patterns and knowledge gaps. The goal was to identify trends in knowledge retention, reveal areas for continuing education, and support the thesis work of a Pharmacy Master's student.","The analysis revealed notable variations in knowledge based on professional experience, helping to draw evidence-based conclusions on the effectiveness of ongoing professional development in the field of pharmacy."],
    additionalImages: [
      imgp22,imgp23
    ],
    githubUrl: 'https://github.com/Samiraid1/Assessing-Pharmacists-Knowledge-Through-Questionnaire-Analysis',
    liveUrl: 'https://github.com/Samiraid1/Assessing-Pharmacists-Knowledge-Through-Questionnaire-Analysis',
    challenges: [
      'Incomplete or Inconsistent Survey Responses',
      'Comparing Knowledge Across Experience Levels',
      'Communicating Complex Findings to a Non-Technical Audience'
      
    ],
    solutions: [
      'Applied data cleaning techniques using Pandas to handle missing values and normalize inconsistent inputs. Removed irrelevant entries while preserving statistical validity.',
      'Categorized respondents based on years of experience and professional titles, then applied statistical tests (e.g., ANOVA, t-tests) to compare performance across groups.',
      'Created clear, intuitive data visualizations using Matplotlib and Seaborn, and prepared an explanatory summary tailored for an academic thesis.'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter', 'Excel'],
    outcomes: [
      'Achieved a clean and reliable dataset for accurate analysis and visualization.',
      'Identified significant knowledge differences between junior and senior pharmacists, highlighting areas for targeted training.',
      'Enabled the Pharmacy Master’s student to effectively present her findings in her thesis and defend them with strong, evidence-based visuals.'
    ]
  },
  /*{
    id: '3',
    title: 'Supply Chain Optimization',
    description: 'End-to-end supply chain analysis and optimization using advanced analytics.',
    tags: ['R', 'Power BI', 'Supply Chain', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    fullDescription: ['Developed a comprehensive supply chain optimization model that reduced logistics costs by 15%. Created interactive Power BI dashboards for real-time monitoring of key performance indicators. Implemented predictive maintenance models that decreased equipment downtime by 20%.'],
    additionalImages: [
      'https://images.unsplash.com/photo-1494607239400-ff147da48308?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000'
    ],
    githubUrl: 'https://github.com/username/supply-chain-optimization',
    liveUrl: 'https://supply-chain-demo.example.com',
    challenges: [
      'Optimizing complex multi-node supply chain network',
      'Balancing inventory levels against service level requirements',
      'Forecasting demand across seasonal and volatile markets',
      'Integrating real-time data from IoT devices in warehouses'
    ],
    solutions: [
      'Developed a mixed-integer linear programming model for network optimization',
      'Created dynamic inventory policies based on service level agreements',
      'Implemented ensemble forecasting methods combining ARIMA and ML approaches',
      'Built a real-time data processing pipeline for IoT sensor integration'
    ],
    technologies: ['R', 'Power BI', 'SQL Server', 'Azure', 'Python', 'CPLEX', 'IoT'],
    outcomes: [
      'Reduced logistics costs by 15%',
      'Decreased inventory holding costs by 18% while maintaining service levels',
      'Improved forecast accuracy by 30%',
      'Reduced equipment downtime by 20% through predictive maintenance'
    ]
  }*/
];

function App() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeGame, setActiveGame] = useState<'trend' | 'knowledge'>('trend');

  // Extract unique tags from all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter(project =>
      selectedTags.some(tag => project.tags.includes(tag))
    );
  }, [selectedTags]);

  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BarChart2 className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Data Analytics Portfolio</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#publications" className="text-gray-600 hover:text-gray-900">Publications</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              <a href="#game" className="text-gray-600 hover:text-gray-900">Knowledge Quiz</a>
              <div className="flex space-x-4">
                <a href="https://github.com/Samiraid1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/sami-abdel-fattah/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:sami97al@gmail.com" target='_blank' className="text-gray-600 hover:text-gray-900">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
              <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#publications"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Publications
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="#game"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Knowledge Quiz
                </a>
                <div className="flex space-x-4 pt-2">
                  <a href="https://github.com/Samiraid1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/sami-abdel-fattah/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:ami97al@gmail.com" className="text-gray-600 hover:text-gray-900">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Data Analyst & Insights Specialist</h2>
          <p className="text-xl text-blue-100 max-w-2xl">
            Transforming complex data into actionable insights. Specialized in data visualization,
            statistical analysis, and predictive modeling.
          </p>
        </div>
      </div>

      {/* About Section */}
      <AboutMe />

      {/* Projects Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="projects">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        
        <ProjectFilters
          tags={allTags}
          selectedTags={selectedTags}
          onTagSelect={handleTagSelect}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
            key={project.id}
            project={project}
            onSelect={() => setSelectedProject(project)}
          />
          
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects match the selected filters.</p>
          </div>
        )}
      </main>

      {/* Publications Section */}
       <Publications />

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="contact">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need help with data analysis or statistical analysis? Fill out the form below
            and I'll get back to you within 24 hours to discuss your project.
          </p>
        </div>
        <ContactForm />
      </section>

       {/* Interactive Game Section */}
       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="game">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Visualization Knowledge Quiz</h2>
        <p className="text-gray-600 mb-8">
          Test your knowledge of data visualization concepts! This quiz covers chart types, 
          statistical measures, and best practices for data analysis.
        </p>
        <DataVizKnowledgeGame />
      </section>


      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>Sami's Data Analytics Portfolio.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;