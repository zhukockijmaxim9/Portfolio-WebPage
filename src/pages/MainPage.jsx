import "../styles/pagesStyle/Main.css";
import SplitText from "../components/SplitText/SplitText";
import Silk from "../components/Slik/Slik";
import Particles from "../components/Particles/Particles";
import ShinyText from "../components/ShinyText/ShinyText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
  return true;
};

const generateRandomBackground = () => {
  return Math.floor(Math.random() * 2) + 1;
};

const MainPage = () => {
  const backgroundNumber = generateRandomBackground();
  return (
    <div className="main-page">
      {backgroundNumber === 1 ? (
        <div className="background">
          <Silk className="background" speed={6} scale={1} color="#4a85d8ff" noiseIntensity={1.5} rotation={0} />
        </div>
      ) : (
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      )}

      <section className="main-container">
        <SplitText
          className="main-info"
          steps={[
            {
              content: <h1 className="hello-text">Привет !</h1>,
              splitType: "chars",
              delay: 120,
            },
            {
              content: (
                <div className="info-container">
                  <h2 className="info-text">Я Жукоцкий Максим</h2>
                  <div className="full-stack-info">
                    <span className="full-stack-text">Full Stack</span>
                    <span className="developer">разработчик</span>
                  </div>
                </div>
              ),
              splitType: "words",
              delay: 100,
            },
            {
              content: (
                <ShinyText
                  text="Создаю веб-приложения, которые работают быстро,"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              ),
              splitType: "lines",
              delay: 120,
            },
            {
              content: (
                <ShinyText
                  text="выглядят современно и решают реальные задачи."
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              ),
              splitType: "lines",
              delay: 120,
            },
            {
              content: (
                <div className="more-about">
                  <p>Давайте познакомимся поближе</p>
                </div>
              ),
              splitType: "lines",
              delay: 120,
            },
          ]}
        />
      </section>
      <div className="className" />
    </div>
  );
};

export default MainPage;
