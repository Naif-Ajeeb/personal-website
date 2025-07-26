import Link from 'next/link';

export default function SoftwareEngineering() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with microservices architecture, built with the same attention to detail as crafting traditional Arabic crafts.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      status: "Completed",
      impact: "Handles 10,000+ concurrent users"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "WebSocket-based collaboration platform for teams, enabling seamless communication like sharing stories over Arabic coffee.",
      tech: ["Next.js", "Socket.io", "MongoDB", "TypeScript", "Tailwind"],
      status: "In Progress",
      impact: "Expected to serve 1000+ teams"
    },
    {
      title: "API Gateway & Microservices",
      description: "Scalable backend architecture with API gateway, designed with the modularity of traditional Arabic architectural patterns.",
      tech: ["Node.js", "Express", "Kong", "Docker", "Kubernetes", "GraphQL"],
      status: "Completed",
      impact: "99.9% uptime, 50ms average response time"
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
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 font-amiri">
            Software Engineering | هندسة البرمجيات
          </h1>
          <p className="text-xl text-amber-800 leading-relaxed">
            Crafting robust, scalable applications with the precision of Arabic calligraphy and the warmth of shared coffee
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
                        <span key={techIndex} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
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

      {/* Development Philosophy */}
      <section className="py-16 px-6 bg-white/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-amiri">
            Development Philosophy | فلسفة التطوير
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Clean Code</h3>
              <p className="text-amber-800">
                Writing code as elegant and readable as Arabic poetry, with clear structure and meaningful names.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Scalable Architecture</h3>
              <p className="text-amber-800">
                Building systems that grow gracefully, like traditional Arab cities that expand while maintaining their character.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">User Experience</h3>
              <p className="text-amber-800">
                Creating interfaces as intuitive and welcoming as a traditional Arab hospitality experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-amiri">
            Technical Stack | المكدس التقني
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-200 text-orange-900 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "Python", "Django", "FastAPI", "GraphQL"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-200 text-orange-900 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Supabase"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-200 text-orange-900 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions", "Terraform"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-200 text-orange-900 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Testing</h3>
              <div className="flex flex-wrap gap-2">
                {["Jest", "Cypress", "Playwright", "Testing Library", "Vitest", "Pytest"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-200 text-orange-900 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "VS Code", "Figma", "Postman", "Jira", "Slack"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-200 text-orange-900 rounded text-sm">
                    {tech}
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
            Let&apos;s build something exceptional together
          </h2>
          <p className="text-amber-800 mb-8">
            From concept to deployment, let&apos;s create software that makes an impact
          </p>
          <Link href="/" className="inline-block bg-amber-900 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
