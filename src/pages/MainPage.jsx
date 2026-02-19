import { useCallback, useEffect, useMemo, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import "../styles/pagesStyle/Main.scss";
import LightPillar from "../HelpComponents/Pillar/Pillar";
import SplitText from "../HelpComponents/SplitText/SplitText";
import aboutPhoto from "../images/Moskow.jpg";

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
  const [isHeroBodyVisible, setHeroBodyVisible] = useState(false);
  const [isHeroCtaVisible, setHeroCtaVisible] = useState(false);

  const showHeroBody = useCallback(() => {
    setHeroBodyVisible(true);
  }, []);

  const showHeroCta = useCallback(() => {
    setHeroCtaVisible(true);
  }, []);

  const heroTopSteps = useMemo(
    () => [
      {
        content: <p className="hero-role">React Development | AI Automation</p>,
        splitType: "words",
        delay: 75,
        from: { opacity: 0, y: 24 },
        to: { opacity: 1, y: 0 },
      },
      {
        content: <h1 className="hero-name">FullStack разработчик</h1>,
        splitType: "chars",
        delay: 35,
        from: { opacity: 0, y: 44 },
        to: { opacity: 1, y: 0 },
      },
    ],
    [],
  );

  const heroBottomSteps = useMemo(
    () => [
      {
        content: <p className="hero-line">Разрабатываю интерфейсы на React</p>,
        splitType: "words",
        delay: 45,
        from: { opacity: 0, y: 24 },
        to: { opacity: 1, y: 0 },
      },
      {
        content: <p className="hero-line">Интегрирую AI-системы в реальные продукты</p>,
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
      <div className="page-pillar-bg" aria-hidden="true">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#b2ff9f"
          intensity={0.75}
          rotationSpeed={0.1}
          glowAmount={0.0017}
          pillarWidth={7}
          pillarHeight={0.6}
          noiseIntensity={0.5}
          pillarRotation={50}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      <section className="hero" id="home">
        <Navigation />

        <div className="hero-content container">
          <div className="hero-sequence">
            <div className="hero-group hero-group--top">
              <SplitText
                className="hero-group-text"
                textAlign="center"
                duration={0.72}
                ease="power3.out"
                steps={heroTopSteps}
                onComplete={showHeroBody}
              />
            </div>
            <div className="hero-group hero-group--bottom">
              {isHeroBodyVisible ? (
                <SplitText
                  className="hero-group-text"
                  textAlign="center"
                  duration={0.72}
                  ease="power3.out"
                  steps={heroBottomSteps}
                  onComplete={showHeroCta}
                />
              ) : (
                <div className="hero-group-placeholder" aria-hidden="true">
                  <p className="hero-line hero-line--ghost">&nbsp;</p>
                  <p className="hero-line hero-line--ghost">&nbsp;</p>
                </div>
              )}
            </div>
          </div>
          <div className={`hero-actions${isHeroCtaVisible ? " is-visible" : ""}`}>
            <a href="#about" className="hero-scroll-link">
              <span className="hero-scroll-cta__label">{"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"}</span>
              <span className="hero-scroll-cta__arrow" aria-hidden="true">
                {"\u2193"}
              </span>
            </a>
          </div>
        </div>
      </section>

      <main className="container main-content">
        <section className="panel reveal" id="about" data-animate>
          <h2>{"\u041e\u0431\u043e \u043c\u043d\u0435 \u043a\u0430\u043a \u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0435"}</h2>
          <div className="about-layout">
            <figure className="about-photo-wrap">
              <img
                className="about-photo"
                src={aboutPhoto}
                alt={"\u041c\u0430\u043a\u0441\u0438\u043c, React Developer"}
                loading="lazy"
              />
            </figure>
            <div className="about-content">
              <h3 className="about-name">{"\u041c\u0430\u043a\u0441\u0438\u043c"}</h3>
              <p className="about-role">React Developer | AI Automation</p>
              <p className="about-summary">
                {
                  "\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e SPA \u043d\u0430 React \u0441 \u0444\u043e\u043a\u0443\u0441\u043e\u043c \u043d\u0430 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0439 UX \u0438 \u0447\u0438\u0441\u0442\u0443\u044e frontend-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443. \u0418\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u044e AI-\u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432\u044b\u0435 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438, \u0430 backend-\u043e\u043f\u044b\u0442 \u043d\u0430 Go \u0438 microservices \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. \u0421\u0435\u0439\u0447\u0430\u0441 \u0443\u0441\u0438\u043b\u0438\u0432\u0430\u044e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 AI automation \u0434\u043b\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0431\u0438\u0437\u043d\u0435\u0441-\u0437\u0430\u0434\u0430\u0447."
                }
              </p>
              <ul className="about-list">
                <li>{"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 SPA \u043d\u0430 React"}</li>
                <li>{"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f AI-\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432"}</li>
                <li>{"\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 backend \u043d\u0430 Go"}</li>
                <li>{"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 microservices"}</li>
              </ul>
              <div className="about-actions">
                <a
                  href="https://github.com/zhukockijmaxim9"
                  className="about-github-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 0.2a7.8 7.8 0 0 0-2.5 15.2c0.4 0.1 0.5-0.2 0.5-0.4v-1.5c-2.1 0.5-2.5-0.9-2.5-0.9-0.4-0.8-0.8-1-0.8-1-0.7-0.4 0-0.4 0-0.4 0.7 0 1.1 0.8 1.1 0.8 0.7 1.1 1.7 0.8 2.1 0.6 0.1-0.5 0.3-0.8 0.5-1-1.7-0.2-3.5-0.9-3.5-3.9 0-0.9 0.3-1.6 0.8-2.2 0-0.2-0.3-1 0.1-2.1 0 0 0.7-0.2 2.2 0.8a7.5 7.5 0 0 1 4.1 0c1.5-1 2.2-0.8 2.2-0.8 0.4 1.1 0.2 1.9 0.1 2.1 0.5 0.6 0.8 1.4 0.8 2.2 0 3-1.8 3.7-3.5 3.9 0.3 0.2 0.5 0.7 0.5 1.4v2c0 0.2 0.1 0.5 0.5 0.4A7.8 7.8 0 0 0 8 0.2z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
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
