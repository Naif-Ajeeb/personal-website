import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/30 border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-amber-900 font-amiri">
              محفظة أعمالي | Portfolio
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
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 font-amiri">
            مرحباً | Welcome
          </h1>
          <p className="text-xl text-amber-800 mb-8 leading-relaxed">
            A passionate technologist brewing innovation like fine Arabic coffee ☕
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-16 font-amiri">
            My Expertise | خبراتي
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Science */}
            <Link href="/data-science" className="group">
              <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">Data Science</h3>
                </div>
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
              <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">AI Engineering</h3>
                </div>
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
              <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">Software Engineering</h3>
                </div>
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
              <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900">General Projects</h3>
                </div>
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
          <p className="text-amber-800 font-amiri text-lg">
            "العمل الجيد يتطلب وقتاً مثل القهوة الجيدة"
          </p>
          <p className="text-amber-700 mt-2">
            "Good work takes time, like good coffee"
          </p>
        </div>
      </footer>
    </div>
  );
}
