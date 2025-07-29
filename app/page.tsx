import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="home" showPersonalInfo={true} />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 dark:text-amber-200 mb-6">
            Welcome
          </h1>
          <p className="text-xl text-amber-800 dark:text-amber-300 mb-8 leading-relaxed">
            A passionate technologist seeking improvement and innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 mx-auto"></div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 dark:text-amber-200 mb-16">
            My Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Science */}
            <Link href="/data-science" className="group">
              <div className="bg-white/40 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-200 mb-4">Data Science</h3>
                <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                  Extracting insights from data like extracting the flavor from coffee beans. 
                  Machine learning, analytics, and data visualization projects.
                </p>
                <div className="mt-4 text-amber-700 dark:text-amber-400 group-hover:text-amber-900 dark:group-hover:text-amber-200 transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>

            {/* AI Engineering */}
            <Link href="/ai-engineering" className="group">
              <div className="bg-white/40 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-200 mb-4">AI Engineering</h3>
                <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                  Building intelligent systems with the precision of a master coffee roaster. 
                  LLMs, neural networks, and AI applications.
                </p>
                <div className="mt-4 text-amber-700 dark:text-amber-400 group-hover:text-amber-900 dark:group-hover:text-amber-200 transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>

            {/* Software Engineering */}
            <Link href="/software-engineering" className="group">
              <div className="bg-white/40 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-200 mb-4">Software Engineering</h3>
                <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                  Crafting robust applications with the attention to detail. 
                  software and web development, architecture, and scalable solutions.
                </p>
                <div className="mt-4 text-amber-700 dark:text-amber-400 group-hover:text-amber-900 dark:group-hover:text-amber-200 transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>

            {/* General Projects */}
            <Link href="/general-projects" className="group">
              <div className="bg-white/40 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-amber-900 dark:text-amber-200 mb-4">General Projects</h3>
                <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                  A diverse collection like a coffee box. 
                  Creative experiments, trying new tools, and innovative solutions.
                </p>
                <div className="mt-4 text-amber-700 dark:text-amber-400 group-hover:text-amber-900 dark:group-hover:text-amber-200 transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900/10 dark:bg-amber-800/20 py-12 mt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-amber-800 dark:text-amber-300 text-lg">
            &quot;Good work takes time&quot;
          </p>
        </div>
      </footer>
    </div>
  );
}
