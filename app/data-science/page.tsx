import Link from 'next/link';

export default function DataScience() {
  const projects = [
    {
      title: "Customer Segmentation Analysis",
      description: "Advanced clustering algorithms to segment customers based on purchasing behavior, like categorizing coffee preferences by region and taste profile.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      status: "Completed",
      impact: "Increased marketing efficiency by 40%"
    },
    {
      title: "Predictive Sales Forecasting",
      description: "Time series analysis to predict future sales trends with the precision of predicting coffee harvest seasons.",
      tech: ["Python", "Prophet", "TensorFlow", "SQL"],
      status: "In Progress",
      impact: "Expected 25% improvement in inventory management"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Interactive dashboard for monitoring key business metrics, refreshing insights like the perfect espresso shot.",
      tech: ["Power BI", "Python", "Azure", "PostgreSQL"],
      status: "Completed",
      impact: "Reduced decision-making time by 60%"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/30 border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-amber-900 font-amiri hover:text-amber-800 transition-colors">
              محفظة أعمالي | Portfolio
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-amber-800 hover:text-amber-900 transition-colors">Home</Link>
              <Link href="/about" className="text-amber-800 hover:text-amber-900 transition-colors">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 font-amiri">
            Data Science | علم البيانات
          </h1>
          <p className="text-xl text-amber-800 leading-relaxed">
            Transforming raw data into meaningful insights, like transforming coffee beans into the perfect brew
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-amber-900 mb-3">{project.title}</h3>
                    <p className="text-amber-800 leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:ml-8 mt-4 md:mt-0">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="border-t border-amber-200 pt-4">
                  <p className="text-amber-700 font-medium">
                    <span className="text-amber-900">Impact:</span> {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-white/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-amiri">
            Technical Skills | المهارات التقنية
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Languages & Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Python", "R", "SQL", "Jupyter", "Git"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-amber-200 text-amber-900 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Machine Learning</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Prophet"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-amber-200 text-amber-900 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Visualization</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["Matplotlib", "Seaborn", "Plotly", "Power BI", "Tableau"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-amber-200 text-amber-900 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            Interested in collaborating?
          </h2>
          <p className="text-amber-800 mb-8">
            Let&apos;s brew something amazing together
          </p>
          <Link href="/" className="inline-block bg-amber-900 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
