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
        <Silk className="background" speed={5} scale={1} color="#4a85d8ff" noiseIntensity={1.5} rotation={0} />
      </div>
      <section className="main-container">
        <SplitText splitType="words" delay={250}>
          <h1 className="hello-text">Привет!</h1>
          <div className="info-container">
            <h2 className="info-text">Я Жукоцкий Максим</h2>
            <div className="full-stack-info">
              <span className="full-stack-text">Full Stack</span>
              <span className="developer">разработчик</span>
            </div>
          </div>
        </SplitText>
        <SplitText splitType="chars" delay={100}></SplitText>
        <div className="more-about">
          <p>Давайте познокомимся поближе</p>
          {/* <Circle className="circle-button" /> */}
        </div>
      </section>
      <div className="className" />
    </div>
  );
};

export default MainPage;
