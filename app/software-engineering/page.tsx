import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function SoftwareEngineering() {
  const projects = [

    {
      title: "AI Robot software",
      description: "a software for building the AI robot called Labeeb. this robot is utilizing LLM, STT, TTS, RAG, and other AI technologies to provide a seamless user experience.",
      tech: ["Python", "Whisper-STT","LangChain", "OpenAI", "websockets"],
      status: "In Progress",
      impact: "seeks to be the office / home assistant"
    },
    {
      title: "API Gateway & Microservices",
      description: "as part of building Labeeb, this project was made to make a server/client architecture that is modular and scalable to turn Labeeb into a robot using raspberry pi.",
      tech: ["Python", "websockets"],
      status: "Completed",
      impact: "Decreasing computation power on the hardware significantly."
    },
    {
      title: "SportConnect App",
      description: "as part of making the graduation project, me and my two classmates built this app is a social media platform for sports enthusiasts, allowing users to connect, share, and discuss their favorite sports.",
      tech: ["Python", "django", "supabase", "Flutter", "Dart"],
      status: "Completed",
      impact: "Connecting Sports Enthusiasts via simple and intuitive platform."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation currentPage="software-engineering" />

      {/* Header */}
      <section className="section-hero">
        <div className="container-sm text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-heading-primary mb-6">
            Software Engineering
          </h1>
          <p className="text-xl text-body-primary leading-relaxed">
            Crafting robust, scalable learning-rich applications
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

      {/* Development Philosophy */}
      <section className="section-standard bg-surface-secondary">
        <div className="container-lg">
          <h2 className="text-3xl font-bold text-center text-heading-primary mb-12 font-amiri">
            Development Philosophy | فلسفة التطوير
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-heading-primary mb-3">Clean Code</h3>
              <p className="text-body-primary">
                Writing code as elegant and readable as Arabic poetry, with clear structure and meaningful names.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-heading-primary mb-3">Scalable Architecture</h3>
              <p className="text-body-primary">
                Building systems that grow gracefully, like traditional Arab cities that expand while maintaining their character.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-heading-primary mb-3">User Experience</h3>
              <p className="text-body-primary">
                Creating interfaces as intuitive and welcoming as a traditional Arab hospitality experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="section-standard">
        <div className="container-lg">
          <h2 className="text-3xl font-bold text-center text-heading-primary mb-12 font-amiri">
            Technical Stack | المكدس التقني
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-project">
              <h3 className="text-xl font-bold text-heading-primary mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"].map((tech, index) => (
                  <span key={index} className="badge-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card-project">
              <h3 className="text-xl font-bold text-heading-primary mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "Python", "Django", "FastAPI", "GraphQL"].map((tech, index) => (
                  <span key={index} className="badge-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card-project">
              <h3 className="text-xl font-bold text-heading-primary mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Supabase"].map((tech, index) => (
                  <span key={index} className="badge-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card-project">
              <h3 className="text-xl font-bold text-heading-primary mb-4">DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions", "Terraform"].map((tech, index) => (
                  <span key={index} className="badge-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card-project">
              <h3 className="text-xl font-bold text-heading-primary mb-4">Testing</h3>
              <div className="flex flex-wrap gap-2">
                {["Jest", "Cypress", "Playwright", "Testing Library", "Vitest", "Pytest"].map((tech, index) => (
                  <span key={index} className="badge-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card-project">
              <h3 className="text-xl font-bold text-heading-primary mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "VS Code", "Figma", "Postman", "Jira", "Slack"].map((tech, index) => (
                  <span key={index} className="badge-tech">
                    {tech}
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
            Let&apos;s build something exceptional together
          </h2>
          <p className="text-body-primary mb-8">
            From concept to deployment, let&apos;s create software that makes an impact
          </p>
          <Link href="/" className="btn-primary">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
