import { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('work');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Education Data
  const education = [
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
  ];

  // Personal Projects
  const projects = [
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
  ];

  // Work Experience
  const experience = [
    {
      id: 1,
      company: "Центральный университет Test & learn lab",
      position: "MLOPS-инженер",
      duration: "02.2025 – наст. время",
      description: "Увеличил эффективность текущей реализации бота поддержки в ЦУ. Уменьшил количество обращений к оператору с помощью эффективного пайплайна обработки запроса, который включает BM25, Qdrant search, Reranker. Оптимизировал работу бэкенда, развернув Kafka с метриками в Prometheus и визуализацией в Grafana."
    }
  ];

  // Tech Stack Icons
  const techStack = [
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg " },
    { name: "PyTorch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/PyTorchLogo.png " },
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg " },
    { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Sklearn_logo_small.svg " },
    { name: "PySpark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache_spark/apache_spark-original-wordmark.svg " },
    { name: "AutoML", logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/AutoML_Logo.svg " },
    { name: "Optuna", logo: "https://optuna.org/assets/img/logo.svg " },
    { name: "OpenCV", logo: "https://opencv.org/wp-content/uploads/2021/09/OpenCV-logo-white.png " },
    { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg " },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg " },
    { name: "FastAPI", logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png " },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg " },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg " },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg " },
    { name: "Docker Compose", logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png " },
    { name: "MLflow", logo: "https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png " },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg " },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg " },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-body">
      {/* Navigation */}
      <nav className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight font-helvetica">YIANNI</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => setActiveSection('work')}
              className={`${activeSection === 'work' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'} pb-1 transition-colors font-helvetica`}
            >
              WORK
            </button>
            <button 
              onClick={() => setActiveSection('education')}
              className={`${activeSection === 'education' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'} pb-1 transition-colors font-helvetica`}
            >
              EDUCATION
            </button>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`${activeSection === 'projects' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'} pb-1 transition-colors font-helvetica`}
            >
              PROJECTS
            </button>
            <button 
              onClick={() => setActiveSection('tech')}
              className={`${activeSection === 'tech' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'} pb-1 transition-colors font-helvetica`}
            >
              TECH STACK
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`${activeSection === 'contact' ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black'} pb-1 transition-colors font-helvetica`}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => {setActiveSection('work'); setIsMenuOpen(false);}}
                className={`${activeSection === 'work' ? 'text-black font-medium font-helvetica' : 'text-gray-500 font-helvetica'} transition-colors`}
              >
                WORK
              </button>
              <button 
                onClick={() => {setActiveSection('education'); setIsMenuOpen(false);}}
                className={`${activeSection === 'education' ? 'text-black font-medium font-helvetica' : 'text-gray-500 font-helvetica'} transition-colors`}
              >
                EDUCATION
              </button>
              <button 
                onClick={() => {setActiveSection('projects'); setIsMenuOpen(false);}}
                className={`${activeSection === 'projects' ? 'text-black font-medium font-helvetica' : 'text-gray-500 font-helvetica'} transition-colors`}
              >
                PROJECTS
              </button>
              <button 
                onClick={() => {setActiveSection('tech'); setIsMenuOpen(false);}}
                className={`${activeSection === 'tech' ? 'text-black font-medium font-helvetica' : 'text-gray-500 font-helvetica'} transition-colors`}
              >
                TECH STACK
              </button>
              <button 
                onClick={() => {setActiveSection('contact'); setIsMenuOpen(false);}}
                className={`${activeSection === 'contact' ? 'text-black font-medium font-helvetica' : 'text-gray-500 font-helvetica'} transition-colors`}
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-helvetica">
            Yianni Mathioudakis is an award-winning designer, based in Baltimore Maryland.
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Creating meaningful digital experiences through strategic design solutions that bridge creativity and functionality.
          </p>
        </div>
      </section>

      {/* Work Section */}
      {activeSection === 'work' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 font-helvetica">Work</h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-center">
              My work focuses on creating impactful visual identities and intuitive user experiences across various platforms.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
                id: 1,
                title: "Brand Identity for Tech Startup",
                category: "Branding",
                image: "https://picsum.photos/seed/project1/600/400 "
              },
              {
                id: 2,
                title: "E-commerce Website Redesign",
                category: "Web Design",
                image: "https://picsum.photos/seed/project2/600/400 "
              },
              {
                id: 3,
                title: "Mobile App UI Kit",
                category: "UI/UX",
                image: "https://picsum.photos/seed/project3/600/400 "
              }].map(project => (
                <div 
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <span className="text-xs uppercase tracking-wider text-gray-300 font-helvetica">{project.category}</span>
                    <h3 className="text-white text-xl font-semibold mt-1 font-helvetica">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {activeSection === 'education' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 font-helvetica">ОБРАЗОВАНИЕ</h2>
            <div className="space-y-8">
              {education.map(item => (
                <div key={item.id} className="border-l-2 border-gray-200 pl-6">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-xl font-helvetica">{item.degree}</h3>
                    <span className="text-gray-500 font-helvetica">{item.year}</span>
                  </div>
                  <p className="text-gray-600 mt-1 font-helvetica">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 font-helvetica">Проекты</h2>
            <div className="space-y-10">
              {projects.map(project => (
                <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mt-2 mb-4 font-helvetica">{project.title}</h3>
                    <p className="text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      {activeSection === 'tech' && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 font-helvetica">Технологии</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {techStack.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <img src={tool.logo} alt={tool.name} className="w-10 h-10 mb-3" />
                  <span className="text-sm font-medium font-helvetica">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold mb-8 font-helvetica">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have a project you'd like to discuss? I'm always interested in hearing about new opportunities and collaborations.
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-helvetica">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-helvetica"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-helvetica">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-helvetica"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-helvetica">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-helvetica"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-helvetica"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-600 font-helvetica">© 2025 Yianni Mathioudakis. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Font Style */}
      <style jsx global>{`
        @font-face {
          font-family: 'Helvetica Neue';
          src: url('https://fonts.cdnfonts.com/s/5/helvetica-neue-5/HelveticaNeueW01-BlackItl.otf ') format('opentype');
          font-weight: normal;
          font-style: normal;
        }

        .font-helvetica {
          font-family: 'Helvetica Neue', sans-serif;
        }

        .font-body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>
    </div>
  );
}