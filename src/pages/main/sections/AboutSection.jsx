import aboutPhoto from "../../../images/Moskow.jpg";

function AboutSection() {
  return (
    <section className="panel reveal" id="about" data-animate>
      <h2>Обо мне как о разработчике</h2>
      <div className="about-layout">
        <figure className="about-photo-wrap">
          <img className="about-photo" src={aboutPhoto} alt="Максим, React Developer" loading="lazy" />
        </figure>
        <div className="about-content">
          <h3 className="about-name">Максим</h3>
          <p className="about-role">React Developer | AI Automation</p>
          <p className="about-summary">
            Разрабатываю SPA на React с фокусом на понятный UX и чистую frontend-архитектуру. Интегрирую AI-сервисы
            в продуктовые сценарии, а backend-опыт на Go и microservices помогает строить целостные системы. Сейчас
            усиливаю направление AI automation для практических бизнес-задач.
          </p>
          <ul className="about-list">
            <li>Разработка SPA на React</li>
            <li>Интеграция AI-сервисов</li>
            <li>Проектирование backend на Go</li>
            <li>Работа с microservices</li>
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
  );
}

export default AboutSection;
