import Link from 'next/link';

export default function GeneralProjects() {
  const projects = [
    {
      title: "Arabic Language Learning App",
      description: "Interactive mobile app for learning Arabic, combining traditional teaching methods with modern technology, like sharing the beauty of Arabic language over coffee conversations.",
      tech: ["React Native", "Firebase", "Node.js", "Speech Recognition"],
      category: "Mobile App",
      status: "Completed",
      impact: "500+ active learners"
    },
    {
      title: "Coffee Shop Recommendation System",
      description: "Location-based app that finds the perfect coffee shop based on your preferences, atmosphere, and Arabic coffee availability.",
      tech: ["Flutter", "Google Maps API", "Machine Learning", "MongoDB"],
      category: "Mobile App",
      status: "In Progress",
      impact: "Targeting 1000+ coffee enthusiasts"
    },
    {
      title: "Digital Art Portfolio Platform",
      description: "Platform for artists to showcase their work, inspired by traditional Arabic art galleries and designed for the digital age.",
      tech: ["Next.js", "Prisma", "AWS S3", "Stripe", "Tailwind"],
      category: "Web Platform",
      status: "Completed",
      impact: "200+ artists showcased"
    },
    {
      title: "Smart Home Automation Hub",
      description: "IoT solution for home automation with Arabic voice commands, bringing traditional hospitality into the smart home era.",
      tech: ["Raspberry Pi", "Python", "MQTT", "React", "Voice Recognition"],
      category: "IoT",
      status: "Prototype",
      impact: "Personal use, planning commercialization"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting system using blockchain technology, ensuring electoral integrity like traditional Arabic council decision-making.",
      tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      category: "Blockchain",
      status: "Research Phase",
      impact: "Addressing electoral transparency"
    },
    {
      title: "Weather Prediction Dashboard",
      description: "Real-time weather analytics with traditional Arabic weather prediction wisdom integrated with modern meteorology.",
      tech: ["Python", "Weather APIs", "Streamlit", "Machine Learning"],
      category: "Data Visualization",
      status: "Completed",
      impact: "Used by local farming community"
    }
  ];

  const categories = ["All", "Mobile App", "Web Platform", "IoT", "Blockchain", "Data Visualization"];

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
          <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 font-amiri">
            General Projects | مشاريع متنوعة
          </h1>
          <p className="text-xl text-amber-800 leading-relaxed">
            A diverse collection of innovative projects, like a well-curated selection of coffee from different regions
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button 
                key={index}
                className="px-4 py-2 bg-white/40 backdrop-blur-sm border border-amber-200 rounded-lg text-amber-900 hover:bg-amber-100 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : project.status === 'Prototype'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-amber-900 mb-3">{project.title}</h3>
                <p className="text-amber-800 leading-relaxed mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
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

      {/* Project Categories Overview */}
      <section className="py-16 px-6 bg-white/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-amiri">
            Project Categories | فئات المشاريع
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2v2h3v16H4V4h3V2h2v2h6V2h2zM6 6v12h12V6H6zm2 2h8v8H8V8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Mobile Applications</h3>
              <p className="text-amber-800 text-sm">Cross-platform mobile solutions</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Web Platforms</h3>
              <p className="text-amber-800 text-sm">Full-stack web applications</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">IoT Solutions</h3>
              <p className="text-amber-800 text-sm">Smart connected devices</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Blockchain</h3>
              <p className="text-amber-800 text-sm">Decentralized applications</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Data Visualization</h3>
              <p className="text-amber-800 text-sm">Interactive dashboards & analytics</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Open Source</h3>
              <p className="text-amber-800 text-sm">Community-driven projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">
            Have an innovative idea?
          </h2>
          <p className="text-amber-800 mb-8">
            Let's explore new possibilities and create something unique together
          </p>
          <Link href="/" className="inline-block bg-amber-900 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
