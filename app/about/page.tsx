import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="about" showPersonalInfo={true} />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 dark:text-amber-200 mb-6">
              About Me
            </h1>
            <p className="text-xl text-amber-800 dark:text-amber-300 leading-relaxed max-w-2xl mx-auto">
              A passionate technologist who finds inspiration in the rich traditions of Arabic culture 
              and the perfect brew of coffee ☕
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-200 mb-6">My Journey</h2>
              <div className="space-y-4 text-amber-800 dark:text-amber-300 leading-relaxed">
                <p>
                  Like the careful process of roasting coffee beans to perfection, my journey in technology 
                  has been one of continuous learning and refinement. I believe that the best solutions 
                  come from understanding both the technical complexity and the human story behind every project.
                </p>
                <p>
                  Drawing inspiration from Arabic culture&apos;s emphasis on hospitality, attention to detail, 
                  and timeless craftsmanship, I approach each project with the same dedication that goes 
                  into preparing the perfect cup of Arabic coffee.
                </p>
                <p>
                  Whether I&apos;m analyzing complex datasets, building intelligent AI systems, or crafting 
                  scalable software solutions, I strive to create technology that serves people and 
                  makes their lives better.
                </p>
              </div>
            </div>

            <div className="bg-white/40 dark:bg-amber-900/40 backdrop-blur-sm border border-amber-200 dark:border-amber-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-200 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">☕</span>
                  <div>
                    <strong  className="space-y-4 text-amber-900 dark:text-amber-200 mb-6">Favorite Coffee:</strong>
                    <span className="space-y-4 text-amber-800 dark:text-amber-300 leading-relaxed">Traditional Arabic coffee as well as classic Brazilian coffee.</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">🌍</span>
                  <div>
                    <strong  className="space-y-4 text-amber-900 dark:text-amber-200 mb-6">Languages:</strong>
                    <span className="space-y-4 text-amber-800 dark:text-amber-300 leading-relaxed">Arabic (Native), English (proficient)</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">📚</span>
                  <div>
                    <strong  className="space-y-4 text-amber-900 dark:text-amber-200 mb-6">Philosophy:</strong>
                    <span className="space-y-4 text-amber-800 dark:text-amber-300 leading-relaxed">&quot;Good work takes time&quot;</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-600 mr-3">🎯</span>
                  <div>
                    <strong  className="space-y-4 text-amber-900 dark:text-amber-200 mb-6">Mission:</strong>
                    <span className="space-y-4 text-amber-800 dark:text-amber-300 leading-relaxed">Building technology that bridges cultures and solves real problems, to develop the nation to lead the world.</span>
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
          <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-amber-200 mb-12 font-amiri">
            Values & Approach | القيم والمنهج
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">Quality & Craftsmanship</h3>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
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
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">Collaboration & Hospitality</h3>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
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
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">Continuous Learning</h3>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                Like perfecting the art of coffee preparation, I&apos;m always learning, adapting, and improving 
                my skills to stay at the forefront of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 dark:text-amber-200 mb-12 font-amiri">
            Experience Journey | رحلة الخبرة
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/40 dark:bg-amber-900/40 backdrop-blur-sm border border-amber-200 dark:border-amber-700 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200">Data Scientist & AI Engineer</h3>
                <span className="text-amber-700 dark:text-amber-400 font-medium">2023 - Present</span>
              </div>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                Currently developing machine learning models and AI solutions for business optimization. 
                Building predictive analytics systems and automated decision-making processes while staying at the forefront of AI innovation.
              </p>
            </div>
            
            <div className="bg-white/40 dark:bg-amber-900/40 backdrop-blur-sm border border-amber-200 dark:border-amber-700 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200">Senior Information Systems Student</h3>
                <span className="text-amber-700 dark:text-amber-400 font-medium">2022 - 2023</span>
              </div>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                Advanced my studies in information systems with focus on data analytics and AI technologies. 
                Completed senior projects involving complex system design and implementation while building practical experience.
              </p>
            </div>
            
            <div className="bg-white/40 dark:bg-amber-900/40 backdrop-blur-sm border border-amber-200 dark:border-amber-700 rounded-xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-200">Information Systems Student</h3>
                <span className="text-amber-700 dark:text-amber-400 font-medium">2020 - 2022</span>
              </div>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                Started my academic journey in information systems, learning the fundamentals of computer science, 
                database management, and system analysis while developing a passion for technology and problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-200 mb-6 font-amiri">
            Let&apos;s Connect | لنتواصل
          </h2>
          <p className="text-amber-800 dark:text-amber-300 mb-8 leading-relaxed">
            Whether you want to discuss a project, share ideas over coffee, or explore how technology 
            can solve real problems, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="bg-amber-900 dark:bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 dark:hover:bg-amber-600 transition-colors">
              ← Back to Portfolio
            </Link>
            <button className="bg-white/40 dark:bg-amber-900/40 backdrop-blur-sm border border-amber-200 dark:border-amber-700 text-amber-900 dark:text-amber-200 px-6 py-3 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-800/50 transition-colors">
              📧 Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="bg-amber-900/10 dark:bg-amber-900/20 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-amber-800 dark:text-amber-300 font-amiri text-lg mb-2">
            &quot;أحسن الكلام ما قل ودل&quot;
          </p>
          <p className="text-amber-700 dark:text-amber-400">
            &quot;The best words are few but meaningful&quot; - Arabic Proverb
          </p>
        </div>
      </footer>
    </div>
  );
}
