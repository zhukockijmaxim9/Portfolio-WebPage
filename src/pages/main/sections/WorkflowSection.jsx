function WorkflowSection() {
  return (
    <section className="panel section section--workflow z-section" id="workflow">
      <div className="z-section__content reveal" data-animate>
        <h2 className="z-section__title">Как я работаю</h2>
        <p className="z-section__placeholder z-section__placeholder--text">Текст-заглушка для описания секции.</p>
      </div>
      <div className="z-section__visual reveal reveal--delay-1" data-animate>
        <div className="z-section__placeholder z-section__placeholder--visual">Визуальный блок-заглушка</div>
      </div>
    </section>
  );
}

export default WorkflowSection;
