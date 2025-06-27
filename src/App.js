import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Optimized Image component with lazy loading
const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = React.useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) observer.observe(imgRef.current);
    
    return () => observer.disconnect();
  }, []);
  
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  const handleError = () => {
    setIsLoaded(true); // Still show placeholder
  };
  
  return (
    <img
      ref={imgRef}
      src={isInView ? src : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo='}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-50'}`}
      onLoad={handleLoad}
      onError={handleError}
      loading="lazy"
    />
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('work');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoized data to prevent unnecessary re-renders
  const education = useMemo(() => [
    {
      id: 1,
      institution: "Центральный университет",
      degree: "ML-инженер",
      year: "2024 – 2028"
    },
    {
      id: 2,
      institution: "Высшая школа экономики",
      degree: "ML-инженер (ФКН)",
      year: "2024 – 2028"
    },
    {
      id: 3,
      institution: "Лицей академии Яндекса",
      degree: "Машинное обучение, Разработка на Python",
      year: "2023 – 2024"
    }
  ], []);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "People REID",
      description: "Разработал и внедрил алгоритм реидентификации человека в видеопотоке среди других объектов. Реализовал обработку видео и извлечение признаков с использованием YOLO-8, Resnet моделей на PyTorch. Настроил контейнеризированное развертывание сервиса с Docker и Docker Compose для масштабирования и удобного деплоя."
    },
    {
      id: 2,
      title: "ImageEnhanceAI",
      description: "Разработал и внедрил Django-based web-сервис для суперразрешения и удаления шума на изображениях. Реализовал backend на Django с REST API для обработки изображений. Интегрировал deep learning модели (ESRGAN, SwinIR, SWIN2SR) на PyTorch для улучшения качества изображений. Обернул сервис в Docker и организовал развертывание с Docker Compose. Оптимизировал работу модели на GPU."
    }
  ], []);

  const experience = useMemo(() => [
    {
      id: 1,
      company: "Центральный университет Test & learn lab",
      position: "MLOPS-инженер",
      duration: "02.2025 – наст. время",
      description: "Увеличил эффективность текущей реализации бота поддержки в ЦУ. Уменьшил количество обращений к оператору с помощью эффективного пайплайна обработки запроса, который включает BM25, Qdrant search, Reranker. Оптимизировал работу бэкенда, развернув Kafka с метриками в Prometheus и визуализацией в Grafana."
    }
  ], []);

  // Optimized tech stack with stable CDN URLs
  const techStack = useMemo(() => [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" }
  ], []);

  const handleSectionChange = useCallback((section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button 
            onClick={() => handleSectionChange('work')}
            className="text-xl font-bold tracking-tight font-inter hover:opacity-80 transition-opacity"
          >
            CHELLICK
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['work', 'education', 'projects', 'tech', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionChange(section)}
                className={`${
                  activeSection === section
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-black'
                } pb-1 transition-all duration-200 font-inter uppercase text-sm font-medium`}
              >
                {section === 'tech' ? 'Tech Stack' : section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 focus:outline-none transition-all duration-200 hover:text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute top-full left-0 right-0 transition-all duration-300">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['work', 'education', 'projects', 'tech', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`${
                    activeSection === section
                      ? 'text-black font-medium'
                      : 'text-gray-500'
                  } transition-all duration-200 font-inter uppercase text-sm text-left`}
                >
                  {section === 'tech' ? 'Tech Stack' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 container mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-inter">
            Chellick: MLOps Engineer Driving Scalable AI Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-inter">
            Specializing in building robust machine learning pipelines and deploying scalable AI systems for real-world impact.
          </p>
        </div>
      </section>

      {/* Work Section */}
      {activeSection === 'work' && (
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 font-inter">Опыт работы</h2>
            <div className="space-y-8">
              {experience.map(item => (
                <article key={item.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold font-inter">{item.position}</h3>
                      <p className="text-lg text-gray-600 font-inter">{item.company}</p>
                    </div>
                    <span className="text-gray-500 font-inter mt-2 md:mt-0 text-sm">{item.duration}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-inter">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {activeSection === 'education' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 font-inter">Образование</h2>
            <div className="space-y-8">
              {education.map(item => (
                <article key={item.id} className="border-l-4 border-gray-200 pl-6 hover:border-gray-800 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <h3 className="font-semibold text-xl font-inter">{item.degree}</h3>
                    <span className="text-gray-500 font-inter mt-1 md:mt-0 text-sm">{item.year}</span>
                  </div>
                  <p className="text-gray-600 mt-1 font-inter">{item.institution}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 font-inter">Проекты</h2>
            <div className="space-y-8">
              {projects.map(project => (
                <article key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 font-inter">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-inter">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      {activeSection === 'tech' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 font-inter">Технологии</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStack.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <OptimizedImage 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    className="w-12 h-12 mb-3 object-contain"
                  />
                  <span className="text-sm font-medium font-inter text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="py-20 bg-gray-50/50">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 font-inter">Get In Touch</h2>
            <p className="text-gray-600 mb-8 font-inter">
              Interested in collaborating on MLOps projects or need help deploying AI solutions? Let's connect and make it happen.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-inter">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 font-inter"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-inter">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 font-inter"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-inter">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 font-inter resize-vertical"
                  placeholder="Tell me about your MLOps needs..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-inter transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 font-inter text-sm">© 2025 Chellick. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="mailto:contact@chellick.dev" className="text-gray-600 hover:text-black transition-colors font-inter text-sm">Email</a>
              <a href="https://github.com/chellick" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors font-inter text-sm">GitHub</a>
              <a href="https://linkedin.com/in/chellick" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors font-inter text-sm">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
