function ContactSection() {
  return (
    <section className="panel section section--contact z-section z-section--reverse" id="contact">
      <div className="z-section__content reveal" data-animate>
        <h2 className="z-section__title">Связаться</h2>
        <p className="z-section__placeholder z-section__placeholder--text">Текст-заглушка для описания секции.</p>
      </div>
      <div className="z-section__visual reveal reveal--delay-1" data-animate>
        <div className="z-section__placeholder z-section__placeholder--visual">Визуальный блок-заглушка</div>
      </div>
    </section>
  );
}

export default ContactSection;
