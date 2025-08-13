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
        <div className="main-info">
          <SplitText
            text="Привет !"
            className="hello-text"
            delay={120}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="info-container">
            <SplitText
              text="Я Жукоцкий Максим"
              className="info-text"
              delay={100}
              duration={1}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="full-stack-info">
              <SplitText
                text="Full Stack"
                className="full-stack-text"
                delay={100}
                duration={1}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <SplitText
                text="разработчик"
                className="developer"
                delay={100}
                duration={1}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
          </div>
        </div>
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
