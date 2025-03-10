import React, { useState, useMemo } from 'react';
import { BarChart2, Github, Linkedin, Mail, Menu, X as CloseIcon } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { AboutMe } from './components/AboutMe';
import { ProjectFilters } from './components/ProjectFilters';
import { TrendSpotterGame } from './components/TrendSpotterGame';
import { DataVizKnowledgeGame } from './components/DataVizKnowledgeGame';

const projects = [
  {
    id: '1',
    title: 'Sales Performance Analytics',
    description: 'Advanced data analysis of sales performance across multiple regions using Python and Tableau.',
    tags: ['Python', 'Tableau', 'Data Visualization', 'SQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    fullDescription: 'Led an extensive analysis of sales performance across 5 regions, implementing advanced data visualization techniques in Tableau. Developed predictive models using Python that improved sales forecasting accuracy by 25%. Created interactive dashboards that are now used by the executive team for strategic decision-making.',
    additionalImages: [
      'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
    ],
    githubUrl: 'https://github.com/username/sales-performance-analytics',
    liveUrl: 'https://sales-analytics-demo.example.com',
    challenges: [
      'Integrating data from multiple disparate sources with different formats',
      'Handling large volumes of historical sales data efficiently',
      'Creating visualizations that effectively communicate complex patterns',
      'Ensuring data accuracy across regional differences'
    ],
    solutions: [
      'Developed custom ETL pipelines using Python to standardize data formats',
      'Implemented data partitioning and incremental loading strategies',
      'Created a hierarchical dashboard system with drill-down capabilities',
      'Built automated data validation checks with alert systems'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Tableau', 'SQL', 'PostgreSQL', 'Git'],
    outcomes: [
      'Improved sales forecasting accuracy by 25%',
      'Reduced reporting time from 3 days to 4 hours',
      'Identified $1.2M in potential revenue opportunities',
      'Enabled real-time decision making for regional sales teams'
    ]
  },
  {
    id: '2',
    title: 'Customer Segmentation Analysis',
    description: 'Machine learning-based customer segmentation using K-means clustering.',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=1000',
    fullDescription: 'Implemented a sophisticated customer segmentation model using K-means clustering algorithm. Analyzed customer behavior patterns across 100,000+ transactions. The resulting segments helped optimize marketing campaigns, leading to a 30% increase in campaign ROI.',
    additionalImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
    ],
    githubUrl: 'https://github.com/username/customer-segmentation',
    liveUrl: 'https://customer-segments.example.com',
    challenges: [
      'Determining the optimal number of customer segments',
      'Handling missing and inconsistent customer data',
      'Interpreting complex multidimensional clusters',
      'Translating technical findings into actionable marketing strategies'
    ],
    solutions: [
      'Applied silhouette analysis and elbow method to determine optimal cluster count',
      'Developed robust data cleaning and imputation pipelines',
      'Created interactive 3D visualizations to explore segment characteristics',
      'Collaborated with marketing team to develop segment-specific strategies'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter', 'AWS'],
    outcomes: [
      'Increased marketing campaign ROI by 30%',
      'Reduced customer churn by 15% through targeted retention strategies',
      'Improved customer lifetime value prediction accuracy by 22%',
      'Enabled personalized product recommendations based on segment characteristics'
    ]
  },
  {
    id: '3',
    title: 'Supply Chain Optimization',
    description: 'End-to-end supply chain analysis and optimization using advanced analytics.',
    tags: ['R', 'Power BI', 'Supply Chain', 'Optimization'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    fullDescription: 'Developed a comprehensive supply chain optimization model that reduced logistics costs by 15%. Created interactive Power BI dashboards for real-time monitoring of key performance indicators. Implemented predictive maintenance models that decreased equipment downtime by 20%.',
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
  }
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
              <a href="#game" className="text-gray-600 hover:text-gray-900">Interactive Games</a>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
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
                  href="#game"
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Interactive Games
                </a>
                <div className="flex space-x-4 pt-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
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

      {/* Interactive Game Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="game">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Interactive Data Games</h2>
        
        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveGame('trend')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeGame === 'trend'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Trend Spotter Game
            </button>
            <button
              onClick={() => setActiveGame('knowledge')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeGame === 'knowledge'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Data Viz Knowledge Quiz
            </button>
          </div>
        </div>
        
        {activeGame === 'trend' ? (
          <>
            <p className="text-gray-600 mb-8">
              Test your trend spotting skills! Can you identify if the trend is increasing, decreasing, or flat?
              Look at the line chart and make your best guess.
            </p>
            <TrendSpotterGame />
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-8">
              Test your knowledge of data visualization concepts! This quiz covers chart types, 
              statistical measures, and best practices for data analysis.
            </p>
            <DataVizKnowledgeGame />
          </>
        )}
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
            <p>© 2024 Data Analytics Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;