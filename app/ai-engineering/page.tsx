import Link from 'next/link';

export default function AIEngineering() {
  const projects = [
    {
      title: "Intelligent Chatbot System",
      description: "Custom LLM-powered chatbot with RAG capabilities, designed to understand context like a seasoned coffee connoisseur understanding flavor notes.",
      tech: ["Python", "LangChain", "OpenAI API", "Vector Databases", "FastAPI"],
      status: "Completed",
      impact: "Reduced customer service response time by 80%"
    },
    {
      title: "Computer Vision Quality Control",
      description: "AI system for automated quality inspection in manufacturing, with the precision of identifying the perfect coffee bean roast level.",
      tech: ["TensorFlow", "OpenCV", "Python", "Edge Computing", "Docker"],
      status: "In Progress",
      impact: "Expected 95% accuracy in defect detection"
    },
    {
      title: "Natural Language Processing Pipeline",
      description: "End-to-end NLP system for sentiment analysis and content classification, understanding text nuances like appreciating Arabic poetry.",
      tech: ["Transformers", "Hugging Face", "PyTorch", "BERT", "AWS"],
      status: "Completed",
      impact: "Processed 1M+ documents with 92% accuracy"
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
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 font-amiri">
            AI Engineering | هندسة الذكاء الاصطناعي
          </h1>
          <p className="text-xl text-amber-800 leading-relaxed">
            Building intelligent systems that learn and adapt, like mastering the art of coffee roasting through experience
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
                        <span key={techIndex} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
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

      {/* AI Specializations */}
      <section className="py-16 px-6 bg-white/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-amiri">
            AI Specializations | تخصصات الذكاء الاصطناعي
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Large Language Models</h3>
              <p className="text-amber-800 text-sm">GPT, BERT, Custom Fine-tuning</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 13.5L8.5 16 12 18.5 15.5 16 12 13.5z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Computer Vision</h3>
              <p className="text-amber-800 text-sm">Object Detection, Image Classification</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5 1.4-1.4 3.6 3.6 9.6-9.6z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Natural Language Processing</h3>
              <p className="text-amber-800 text-sm">Sentiment Analysis, Text Classification</p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm border border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">MLOps & Deployment</h3>
              <p className="text-amber-800 text-sm">Model Serving, Monitoring, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-amiri">
            Technical Arsenal | الأدوات التقنية
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "Hugging Face", "LangChain", "OpenCV", "Scikit-learn"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-4">Cloud & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "MLflow"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded text-sm">
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
            Ready to build intelligent solutions?
          </h2>
          <p className="text-amber-800 mb-8">
            Let's create AI that makes a difference
          </p>
          <Link href="/" className="inline-block bg-amber-900 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
