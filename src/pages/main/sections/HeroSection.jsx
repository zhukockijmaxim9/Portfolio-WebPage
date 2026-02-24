import { useCallback, useMemo, useState } from "react";
import LightPillar from "../../../shared/graphics/LightPillar/LightPillar";
import SplitText from "../../../shared/animation/SplitText/SplitText";
import Navigation from "../../../shared/ui/Navigation/Navigation";

function HeroSection() {
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

  return (
    <section className="hero" id="home">
      <div className="hero-pillar-bg" aria-hidden="true">
        {/* <LightPillar
          topColor="#5227FF"
          bottomColor="#b2ff9f"
          backgroundColor="#000000"
          intensity={0.75}
          rotationSpeed={0.1}
          glowAmount={0.0017}
          pillarWidth={7}
          pillarHeight={0.6}
          noiseIntensity={0.5}
          pillarRotation={50}
          interactive={false}
          mixBlendMode="normal"
          quality="high"
        /> */}
      </div>

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
            <span className="hero-scroll-cta__label">Подробнее</span>
            <span className="hero-scroll-cta__arrow" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
