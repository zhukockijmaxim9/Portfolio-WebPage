import "../styles/pagesStyle/Main.css";
import SplitText from "../components/SplitText/SplitText";
import Silk from "../components/Slik/Slik";
import Circle from "../components/CircleButton/Circle";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
  return true;
};

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="background">
        <Silk className="background" speed={6} scale={1} color="#4a85d8ff" noiseIntensity={1.5} rotation={0} />
      </div>
      <section className="main-container">
        <SplitText
          className="main-info"
          steps={[
            {
              content: <h1 className="hello-text">Привет!</h1>,
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
