import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function DataScience() {
  const projects = [
    {
      title: "Customer Segmentation Analysis",
      description: "Advanced clustering algorithms to segment customers based on purchasing behavior.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      status: "Completed",
      impact: "Increased marketing efficiency by 40%"
    },
    {
      title: "Predictive Sales Forecasting",
      description: "Time series analysis to predict future sales trends. this project specifically was harder than the rest considering the dataset's limitation as it only contained ~2100 rows and that doesn't seem enough for the models i tested.",
      tech: ["Python", "scikit-learn"],
      status: "Completed",
      impact: "Expected improvement in inventory management"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for monitoring key business metrics.",
      tech: ["Power BI", "Python"],
      status: "Completed",
      impact: "Reduced decision-making time by 60%"
    }
  ];

  return (
    <div className="min-h-screen">
      
      <Navigation currentPage="data-science" />

      {/* Header */}
      <section className="section-hero">
        <div className="container-sm text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-heading-primary mb-6">
            Data Science
          </h1>
          <p className="text-xl text-body-primary leading-relaxed">
            Transforming raw data into meaningful insights, like transforming coffee beans into the perfect brew
          </p>
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
                
                <div className="project-divider">
                  <p className="text-body-secondary font-medium">
                    <span className="text-heading-primary">Impact:</span> {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-with-bg">
        <div className="container-sm">
          <h2 className="text-3xl font-bold text-center text-heading-primary mb-12">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-heading-primary mb-4">Languages & Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Python", "R", "SQL", "Jupyter", "Git"].map((skill, index) => (
                  <span key={index} className="badge-tech">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-heading-primary mb-4">Machine Learning</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Prophet"].map((skill, index) => (
                  <span key={index} className="badge-tech">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-heading-primary mb-4">Visualization</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Matplotlib", "Seaborn", "Plotly", "Power BI"].map((skill, index) => (
                  <span key={index} className="badge-tech">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard">
        <div className="container-sm text-center">
          <h2 className="text-3xl font-bold text-heading-primary mb-6">
            Interested in collaborating?
          </h2>
          <p className="text-body-primary mb-8">
            Let&apos;s brew something amazing together
          </p>
          <Link href="/" className="btn-primary">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
