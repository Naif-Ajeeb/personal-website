import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Navigation */}
      <nav className="bg-white/30 border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-amber-900">
              Portfolio
            </h1>
            <div className="flex gap-6">
              <Link href="/" className="text-amber-800 hover:text-amber-900 transition-colors">Home</Link>
              <Link href="/about" className="text-amber-800 hover:text-amber-900 transition-colors">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6">
            Welcome
          </h1>
          <p className="text-xl text-amber-800 mb-8 leading-relaxed">
            A passionate technologist brewing innovation like fine coffee
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-16">
            My Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Science */}
            <Link href="/data-science" className="group">
              <div className="bg-white/40 border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Data Science</h3>
                <p className="text-amber-800 leading-relaxed">
                  Extracting insights from data like extracting the perfect flavor from coffee beans. 
                  Machine learning, analytics, and data visualization projects.
                </p>
                <div className="mt-4 text-amber-700 group-hover:text-amber-900 transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>

            {/* AI Engineering */}
            <Link href="/ai-engineering" className="group">
              <div className="bg-white/40 border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">AI Engineering</h3>
                <p className="text-amber-800 leading-relaxed">
                  Building intelligent systems with the precision of a master coffee roaster. 
                  LLMs, neural networks, and AI applications.
                </p>
                <div className="mt-4 text-amber-700 group-hover:text-amber-900 transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>

            {/* Software Engineering */}
            <Link href="/software-engineering" className="group">
              <div className="bg-white/40 border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Software Engineering</h3>
                <p className="text-amber-800 leading-relaxed">
                  Crafting robust applications with the attention to detail of Arabic calligraphy. 
                  Full-stack development, architecture, and scalable solutions.
                </p>
                <div className="mt-4 text-amber-700 group-hover:text-amber-900 transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>

            {/* General Projects */}
            <Link href="/general-projects" className="group">
              <div className="bg-white/40 border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">General Projects</h3>
                <p className="text-amber-800 leading-relaxed">
                  A diverse collection like a well-curated coffee selection. 
                  Creative experiments, tools, and innovative solutions.
                </p>
                <div className="mt-4 text-amber-700 group-hover:text-amber-900 transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900/10 py-12 mt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-amber-800 text-lg">
            &quot;Good work takes time, like good coffee&quot;
          </p>
        </div>
      </footer>
    </div>
  );
}
