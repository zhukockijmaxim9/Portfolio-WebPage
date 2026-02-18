import { useCallback, useEffect, useMemo, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Button from "../components/Button/Button";
import "../styles/pagesStyle/Main.scss";
import LightPillar from "../HelpComponents/Pillar/Pillar";
import SplitText from "../HelpComponents/SplitText/SplitText";

const stackCards = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: "Коммерческий проект" },
      { name: "JavaScript", level: "Использую регулярно" },
      { name: "HTML / CSS", level: "Использую регулярно" },
      { name: "SPA", level: "Коммерческий проект" },
      { name: "REST API", level: "Интеграции в проде" },
    ],
  },
  {
    title: "AI & Automation",
    items: [
      { name: "Python", level: "Pet + интеграции" },
      { name: "Computer Vision", level: "Реальные прототипы" },
      { name: "CNN", level: "Pet project" },
      { name: "LLM integration", level: "Активно развиваю" },
      { name: "n8n", level: "Использую регулярно" },
      { name: "AI workflows", level: "Сквозные процессы" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Go", level: "Microservices" },
      { name: "Node.js", level: "Интеграционный слой" },
      { name: "JWT", level: "Auth flow" },
      { name: "gRPC", level: "Сервисная коммуникация" },
      { name: "PostgreSQL", level: "Production storage" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: "Ежедневно" },
      { name: "Figma", level: "UI-проработка" },
      { name: "Docker", level: "Локальные контуры" },
    ],
  },
];

const projects = [
  {
    title: "React + Microservices Forum",
    badge: "Fullstack product",
    points: [
      "SPA на React с акцентом на UX и архитектуру интерфейса",
      "JWT-авторизация и защищенные пользовательские сценарии",
      "Интеграция с Go-backend через REST API",
      "WebSocket-чат в реальном времени",
    ],
  },
  {
    title: "Face Recognition System",
    badge: "AI integration",
    points: [
      "Python + OpenCV для распознавания в потоке",
      "Сохранение embeddings в PostgreSQL",
      "Реальное время и надежный пайплайн обработки",
      "Отображение имени на frontend-интерфейсе",
    ],
  },
  {
    title: "Классификация кухонных принадлежностей",
    badge: "Computer Vision",
    points: [
      "CNN-модель с расчетом accuracy и анализом ошибок",
      "Собранный и размеченный dataset",
      "Ориентация на прикладной use-case, а не только на метрику",
      "Потенциал: e-commerce, складские системы, автоматизация",
    ],
  },
];

const workflowSteps = [
  "Проектирую frontend-архитектуру до начала кодинга",
  "Принимаю UX-решения на основе сценариев пользователя",
  "Подключаю backend и AI-сервисы как целостную систему",
  "Разделяю ответственность компонентов и сервисов",
  "Поддерживаю чистоту кода и прогнозируемость развития проекта",
];

const MainPage = () => {
  const [isHeroCtaVisible, setHeroCtaVisible] = useState(false);

  const showHeroCta = useCallback(() => {
    setHeroCtaVisible(true);
  }, []);

  const heroIntroSteps = useMemo(
    () => [
      {
        content: <p className="hero-role">React Developer | AI Automation</p>,
        className: "hero-step hero-step--1",
        splitType: "words",
        delay: 75,
        from: { opacity: 0, y: 24 },
        to: { opacity: 1, y: 0 },
      },
      {
        content: <h1 className="hero-name">FullStack разработчик</h1>,
        className: "hero-step hero-step--2",
        splitType: "chars",
        delay: 35,
        from: { opacity: 0, y: 44 },
        to: { opacity: 1, y: 0 },
      },
      {
        content: <p className="hero-line">Разрабатываю интерфейсы на React</p>,
        className: "hero-step hero-step--3",
        splitType: "words",
        delay: 45,
        from: { opacity: 0, y: 24 },
        to: { opacity: 1, y: 0 },
      },
      {
        content: <p className="hero-line">Интегрирую AI-системы в реальные продукты</p>,
        className: "hero-step hero-step--4",
        splitType: "words",
        delay: 45,
        from: { opacity: 0, y: 24 },
        to: { opacity: 1, y: 0 },
      },
    ],
    [],
  );

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
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
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-page">
      <section className="hero" id="home">
        <div className="hero-overlay" />
        <Navigation />

        <div className="pillar-div">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#b2ff9f"
            intensity={1}
            rotationSpeed={0.15}
            glowAmount={0.0017}
            pillarWidth={7}
            pillarHeight={0.7}
            noiseIntensity={0.5}
            pillarRotation={50}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>

        <div className="hero-content container">
          <SplitText className="hero-sequence" textAlign="center" duration={0.72} ease="power3.out" steps={heroIntroSteps} onComplete={showHeroCta} />
          <div className={`hero-actions${isHeroCtaVisible ? " is-visible" : ""}`}>
            <Button href="https://github.com/your-username" className="app-button--glass">
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <main className="container main-content">
        <section className="panel reveal" id="about" data-animate>
          <h2>Обо мне как о разработчике</h2>
          <p>
            Специализируюсь на разработке SPA на React, проектирую понятные интерфейсы и продумываю
            frontend-архитектуру. Интегрирую backend и AI-сервисы в веб-продукты, чтобы система была цельной и рабочей в
            реальных сценариях.
          </p>
          <ul className="accent-list">
            <li>Люблю frontend и проектирование интерфейсов</li>
            <li>Имею backend-опыт: Go, microservices, JWT</li>
            <li>Развиваюсь в AI automation и AI-интеграциях</li>
          </ul>
        </section>

        <section className="panel reveal" id="stack" data-animate>
          <div className="section-head">
            <h2>Технологический стек</h2>
            <span className="head-note">Приоритет: frontend + AI integration</span>
          </div>
          <div className="stack-grid">
            {stackCards.map((card) => (
              <article key={card.title} className="stack-card">
                <h3>{card.title}</h3>
                <div className="stack-items">
                  {card.items.map((item) => (
                    <span className="skill-chip" key={item.name} title={item.level}>
                      <span>{item.name}</span>
                      <small>{item.level}</small>
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="panel reveal" id="projects" data-animate>
          <h2>Проекты</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-badge">{project.badge}</span>
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

        <section className="panel panel-accent reveal" id="automation" data-animate>
          <h2>AI Automation & Intelligent Systems</h2>
          <div className="automation-grid">
            <span>Разработка AI-ботов</span>
            <span>Интеграция LLM в web-приложения</span>
            <span>Автоматизация бизнес-процессов</span>
            <span>Создание AI workflows</span>
          </div>
        </section>

        <section className="panel reveal" id="workflow" data-animate>
          <h2>Как я работаю</h2>
          <ol className="workflow-list">
            {workflowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="panel reveal" id="contact" data-animate>
          <h2>Связаться</h2>
          <p>Открыт к задачам по React, AI-интеграциям и автоматизации процессов в веб-продуктах.</p>
          <div className="contact-row">
            <a href="mailto:your.email@example.com">your.email@example.com</a>
            <a href="https://github.com/your-username">github.com/your-username</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
