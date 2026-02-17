import { useEffect } from "react";
import "../styles/pagesStyle/Main.css";
import Particles from "../HelpComponents/Particles/Particles";

const stackCards = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: "Коммерческий проект" },
      { name: "JavaScript", level: "Использую регулярно" },
      { name: "HTML / CSS", level: "Использую регулярно" },
      { name: "SPA", level: "Коммерческий проект" },
      { name: "REST API integration", level: "Коммерческий проект" },
    ],
  },
  {
    title: "AI & Automation",
    items: [
      { name: "Python", level: "Pet project" },
      { name: "Computer Vision", level: "Pet project" },
      { name: "CNN", level: "Pet project" },
      { name: "LLM integration", level: "Активно развиваю" },
      { name: "n8n", level: "Использую регулярно" },
      { name: "AI workflows", level: "Активно развиваю" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Go", level: "Коммерческий проект" },
      { name: "Node.js", level: "Использую регулярно" },
      { name: "JWT", level: "Коммерческий проект" },
      { name: "gRPC", level: "Pet project" },
      { name: "PostgreSQL", level: "Коммерческий проект" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: "Использую регулярно" },
      { name: "Figma", level: "Использую регулярно" },
      { name: "Docker", level: "Использую регулярно" },
    ],
  },
];

const projects = [
  {
    title: "React + Microservices Forum",
    points: [
      "SPA на React с продуманной структурой экранов",
      "JWT-авторизация и защищенные пользовательские сценарии",
      "Интеграция с Go-backend через REST API",
      "WebSocket-чат в реальном времени",
    ],
  },
  {
    title: "Face Recognition System",
    points: [
      "Python + OpenCV для распознавания лиц",
      "Сохранение embeddings в PostgreSQL",
      "Обработка потока в реальном времени",
      "Отображение распознанного имени на frontend",
    ],
  },
  {
    title: "Классификация кухонных принадлежностей",
    points: [
      "CNN-модель для классификации категорий объектов",
      "Собранный и размеченный dataset",
      "Метрика accuracy и анализ качества предсказаний",
      "Потенциальное применение: e-commerce, склад, автоматизация",
    ],
  },
];

const workflowSteps = [
  "Проектирую frontend-архитектуру и структуру UI",
  "Думаю о UX, чтобы интерфейс оставался понятным",
  "Строю масштабируемый backend при необходимости",
  "Разделяю ответственность и придерживаюсь clean architecture",
  "Пишу чистый и поддерживаемый код",
];

const MainPage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-page">
      <section className="hero-section" id="top">
        <Particles
          className="hero-particles"
          particleColors={["#63f4ff", "#9ec6ff", "#ffffff"]}
          particleCount={220}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={110}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="hero-gradient" />
        <div className="hero-content reveal is-visible">
          <p className="hero-kicker">React Developer | AI Automation</p>
          <h1 className="hero-title">Жукоцкий Максим</h1>
          <p className="hero-subtitle">
            Разрабатываю интерфейсы на React и интегрирую AI-системы в реальные продукты
          </p>
          <div className="hero-actions">
            <a href="#projects" className="action-button action-button-primary">
              Проекты
            </a>
            <a href="https://github.com/your-username" className="action-button action-button-ghost">
              GitHub
            </a>
            <a href="#contact" className="action-button action-button-ghost">
              Связаться
            </a>
          </div>
        </div>
      </section>

      <main className="content-shell">
        <section className="section-card reveal" data-reveal>
          <h2 className="section-title">Обо мне как о разработчике</h2>
          <p className="section-lead">
            Специализируюсь на разработке SPA на React, проектирую удобные интерфейсы и
            интегрирую backend и AI-сервисы в веб-приложения.
          </p>
          <ul className="list-grid">
            <li>Люблю frontend и проектирование интерфейсов</li>
            <li>Имею backend-опыт: Go, microservices, JWT</li>
            <li>Развиваюсь в AI automation и AI-интеграциях</li>
          </ul>
        </section>

        <section className="section-card reveal" data-reveal>
          <h2 className="section-title">Технологический стек</h2>
          <div className="stack-grid">
            {stackCards.map((card) => (
              <article key={card.title} className="stack-card">
                <h3>{card.title}</h3>
                <div className="tech-tags">
                  {card.items.map((item) => (
                    <span key={item.name} className="tech-tag" title={item.level}>
                      <span className="tech-name">{item.name}</span>
                      <span className="tech-level">{item.level}</span>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card reveal" id="projects" data-reveal>
          <h2 className="section-title">Проекты</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card section-card-accent reveal" data-reveal>
          <h2 className="section-title">AI Automation & Intelligent Systems</h2>
          <ul className="list-grid">
            <li>Разработка AI-ботов</li>
            <li>Интеграция LLM в web-приложения</li>
            <li>Автоматизация бизнес-процессов</li>
            <li>Создание AI workflows</li>
          </ul>
        </section>

        <section className="section-card reveal" data-reveal>
          <h2 className="section-title">Как я работаю</h2>
          <ul className="workflow-list">
            {workflowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="section-card reveal" id="contact" data-reveal>
          <h2 className="section-title">Связаться</h2>
          <p className="section-lead">
            Открыт к задачам по React, интеграции AI в продукты и автоматизации процессов.
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com">your.email@example.com</a>
            <a href="https://github.com/your-username">github.com/your-username</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
