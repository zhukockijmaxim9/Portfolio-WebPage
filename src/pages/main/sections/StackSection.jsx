function StackSection({ stackCards }) {
  return (
    <section className="panel" id="stack">
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
  );
}

export default StackSection;
