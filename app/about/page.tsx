import Link from 'next/link';

export default function About() {
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
              <Link href="/about" className="text-amber-800 hover:text-amber-900 transition-colors font-semibold">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 font-amiri">
              عني | About Me
            </h1>
            <p className="text-xl text-amber-800 leading-relaxed max-w-2xl mx-auto">
              A passionate technologist who finds inspiration in the rich traditions of Arabic culture 
              and the perfect brew of coffee ☕
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6 font-amiri">My Journey</h2>
              <div className="space-y-4 text-amber-800 leading-relaxed">
                <p>
                  Like the careful process of roasting coffee beans to perfection, my journey in technology 
                  has been one of continuous learning and refinement. I believe that the best solutions 
                  come from understanding both the technical complexity and the human story behind every project.
                </p>
                <p>
                  Drawing inspiration from Arabic culture's emphasis on hospitality, attention to detail, 
                  and timeless craftsmanship, I approach each project with the same dedication that goes 
                  into preparing the perfect cup of Arabic coffee.
                </p>
                <p>
                  Whether I'm analyzing complex datasets, building intelligent AI systems, or crafting 
                  scalable software solutions, I strive to create technology that serves people and 
                  makes their lives better.
                </p>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">☕</span>
                  <div>
                    <strong className="text-amber-900">Favorite Coffee:</strong>
                    <span className="text-amber-800 ml-2">Traditional Arabic coffee with cardamom</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">🌍</span>
                  <div>
                    <strong className="text-amber-900">Languages:</strong>
                    <span className="text-amber-800 ml-2">Arabic, English, Python, JavaScript</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">📚</span>
                  <div>
                    <strong className="text-amber-900">Philosophy:</strong>
                    <span className="text-amber-800 ml-2">"Good work takes time, like good coffee"</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">🎯</span>
                  <div>
                    <strong className="text-amber-900">Mission:</strong>
                    <span className="text-amber-800 ml-2">Building technology that bridges cultures and solves real problems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Values */}
      <section className="py-16 px-6 bg-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-amiri">
            Values & Approach | القيم والمنهج
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Quality & Craftsmanship</h3>
              <p className="text-amber-800 leading-relaxed">
                Like traditional Arabic artisans, I believe in taking the time to create something truly excellent, 
                paying attention to every detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2v6h2v-6h2v6h2v-6h2v6h2V6H4v12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Collaboration & Hospitality</h3>
              <p className="text-amber-800 leading-relaxed">
                Inspired by Arabic hospitality, I believe the best solutions come from bringing people together 
                and creating an environment of mutual respect.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Continuous Learning</h3>
              <p className="text-amber-800 leading-relaxed">
                Like perfecting the art of coffee preparation, I'm always learning, adapting, and improving 
                my skills to stay at the forefront of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-amiri">
            Experience Journey | رحلة الخبرة
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-amber-900">Senior Full-Stack Developer</h3>
                <span className="text-amber-700 font-medium">2022 - Present</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                Leading development of scalable web applications and AI-powered solutions. 
                Mentoring junior developers and architecting systems that serve thousands of users.
              </p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-amber-900">Data Scientist & AI Engineer</h3>
                <span className="text-amber-700 font-medium">2020 - 2022</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                Developed machine learning models and AI solutions for business optimization. 
                Built predictive analytics systems and automated decision-making processes.
              </p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-amber-900">Software Developer</h3>
                <span className="text-amber-700 font-medium">2018 - 2020</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                Started my professional journey building web applications and learning the craft of software development. 
                Focused on clean code and user-centered design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 font-amiri">
            Let's Connect | لنتواصل
          </h2>
          <p className="text-amber-800 mb-8 leading-relaxed">
            Whether you want to discuss a project, share ideas over coffee, or explore how technology 
            can solve real problems, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors">
              ← Back to Portfolio
            </Link>
            <button className="bg-white/40 backdrop-blur-sm border border-amber-200 text-amber-900 px-6 py-3 rounded-lg hover:bg-amber-100 transition-colors">
              📧 Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="bg-amber-900/10 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-amber-800 font-amiri text-lg mb-2">
            "أحسن الكلام ما قل ودل"
          </p>
          <p className="text-amber-700">
            "The best words are few but meaningful" - Arabic Proverb
          </p>
        </div>
      </footer>
    </div>
  );
}
