import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function GeneralProjects() {
  const projects = [
    {
      title: "PowerBI Dashboard",
      description: "Built a dashboard using PowerBI as Part of a PowerBI course from 'qafza' team.",
      tech: ["PowerBI", "Data Visualization"],
      category: "Data Visualization",
      status: "Completed",
      impact: "Interesting insights into data trends and patterns, and a learning experience for me."
    },

  ];

  const categories = ["All", "Web Platform", "IoT", "Blockchain"];

  return (
    <div className="min-h-screen">
      <Navigation currentPage="general-projects" />

      {/* Header */}
      <section className="section-hero">
        <div className="container-sm text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-600 dark:from-orange-600 dark:to-yellow-700 rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-heading-primary mb-6">
            General Projects
          </h1>
          <p className="text-xl text-body-primary leading-relaxed">
                  A diverse collection like a coffee box. 
                  Creative experiments, trying new tools, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="container-lg">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button 
                key={index}
                className="px-4 py-2 bg-surface-primary border border-border-primary rounded-lg text-body-primary hover:bg-surface-secondary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-standard">
        <div className="container-md">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-project">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-heading-primary mb-3">{project.title}</h3>
                    <p className="text-body-primary leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="badge-tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <span className={project.status === 'Completed' ? 'badge-completed' : 'badge-in-progress'}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-border-primary pt-4">
                  <p className="text-body-secondary font-medium">
                    <span className="text-heading-primary">Impact:</span> {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories Overview */}
      <section className="section-standard bg-surface-secondary">
        <div className="container-lg">
          <h2 className="text-3xl font-bold text-center text-heading-primary mb-12 font-amiri">
            Project Categories | فئات المشاريع
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-project text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2v2h3v16H4V4h3V2h2v2h6V2h2zM6 6v12h12V6H6zm2 2h8v8H8V8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-heading-primary mb-2">Mobile Applications</h3>
              <p className="text-body-primary text-sm">Cross-platform mobile solutions</p>
            </div>
            
            <div className="card-project text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-heading-primary mb-2">Web Platforms</h3>
              <p className="text-body-primary text-sm">Full-stack web applications</p>
            </div>
            
            <div className="card-project text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-heading-primary mb-2">IoT Solutions</h3>
              <p className="text-body-primary text-sm">Smart connected devices</p>
            </div>
            
            <div className="card-project text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-heading-primary mb-2">Blockchain</h3>
              <p className="text-body-primary text-sm">Decentralized applications</p>
            </div>
            
            <div className="card-project text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-heading-primary mb-2">Data Visualization</h3>
              <p className="text-body-primary text-sm">Interactive dashboards & analytics</p>
            </div>
            
            <div className="card-project text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-heading-primary mb-2">Open Source</h3>
              <p className="text-body-primary text-sm">Community-driven projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard">
        <div className="container-sm text-center">
          <h2 className="text-3xl font-bold text-heading-primary mb-6">
            Have an innovative idea?
          </h2>
          <p className="text-body-primary mb-8">
            Let&apos;s explore new possibilities and create something unique together
          </p>
          <Link href="/" className="btn-primary">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
