import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background Pattern */}
      <div className="background-pattern">
        {/* Background circles */}
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        
        {/* Orbiting lines around circles - like clock hands */}
        <div className="orbit-line orbit-line-1a"></div>
        <div className="orbit-line orbit-line-1b"></div>
        <div className="orbit-line orbit-line-1c"></div>
        
        <div className="orbit-line orbit-line-2a"></div>
        <div className="orbit-line orbit-line-2b"></div>
        <div className="orbit-line orbit-line-2c"></div>
        
        <div className="orbit-line orbit-line-3a"></div>
        <div className="orbit-line orbit-line-3b"></div>
        
        {/* Static geometric intersecting lines */}
        <div className="static-line static-line-1"></div>
        <div className="static-line static-line-2"></div>
        <div className="static-line static-line-3"></div>
        
        {/* Traversing lines */}
        {/* <div className="traverse-line traverse-line-1"></div>
        <div className="traverse-line traverse-line-2"></div>
        <div className="traverse-line traverse-line-3"></div>
        <div className="traverse-line traverse-line-4"></div>
        <div className="traverse-line traverse-line-5"></div> */}
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navigation currentPage="home" showPersonalInfo={true} />

      {/* Hero Section */}
      <section className="section-hero">
        <div className="container-sm text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-heading-primary mb-6">
            Welcome
          </h1>
          <p className="text-xl text-body-primary mb-8 leading-relaxed">
            A passionate technologist seeking improvement and innovation
          </p>
          <div className="gradient-divider"></div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="section-standard">
        <div className="container-md">
          <h2 className="text-4xl font-bold text-center text-heading-primary mb-16">
            My Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Science */}
            <Link href="/data-science" className="group">
              <div className="card-interactive">
                <h3 className="text-2xl font-bold text-heading-primary mb-4">Data Science</h3>
                <p className="text-body-primary leading-relaxed">
                  Extracting insights from data like extracting the flavor from coffee beans. 
                  Machine learning, analytics, and data visualization projects.
                </p>
                <div className="mt-4 text-body-secondary group-hover:text-heading-primary transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>

            {/* AI Engineering */}
            <Link href="/ai-engineering" className="group">
              <div className="card-interactive">
                <h3 className="text-2xl font-bold text-heading-primary mb-4">AI Engineering</h3>
                <p className="text-body-primary leading-relaxed">
                  Building intelligent systems with the precision of a master coffee roaster. 
                  LLMs, neural networks, and AI applications.
                </p>
                <div className="mt-4 text-body-secondary group-hover:text-heading-primary transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>

            {/* Software Engineering */}
            <Link href="/software-engineering" className="group">
              <div className="card-interactive">
                <h3 className="text-2xl font-bold text-heading-primary mb-4">Software Engineering</h3>
                <p className="text-body-primary leading-relaxed">
                  Crafting robust applications with the attention to detail. 
                  software and web development, architecture, and scalable solutions.
                </p>
                <div className="mt-4 text-body-secondary group-hover:text-heading-primary transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>

            {/* General Projects */}
            <Link href="/general-projects" className="group">
              <div className="card-interactive">
                <h3 className="text-2xl font-bold text-heading-primary mb-4">General Projects</h3>
                <p className="text-body-primary leading-relaxed">
                  A diverse collection like a coffee box. 
                  Creative experiments, trying new tools, and innovative solutions.
                </p>
                <div className="mt-4 text-body-secondary group-hover:text-heading-primary transition-colors">
                  Explore Projects →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900/10 dark:bg-amber-800/20 py-12 mt-20">
        <div className="container-sm text-center">
          <p className="text-body-primary text-lg">
            &quot;Good work takes time&quot;
          </p>
        </div>
      </footer>
      </div> {/* Close content div */}
    </div>
  );
}
