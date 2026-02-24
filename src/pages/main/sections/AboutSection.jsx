import aboutPhoto from "../../../images/Moskow.jpg";

function AboutSection() {
  return (
    <section className="panel section section--about z-section" id="about">
      <div className="z-section__content reveal" data-animate>
        <h2 className="z-section__title">Обо мне</h2>
      </div>
      <figure className="z-section__visual about-photo-wrap reveal reveal--delay-1" data-animate>
        <img className="about-photo" src={aboutPhoto} alt="Максим, React Developer" loading="lazy" />
      </figure>
    </section>
  );
}

export default AboutSection;
