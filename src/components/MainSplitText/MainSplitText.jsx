import "./MainSplitText.css";
import SplitText from "../../HelpComponents/SplitText/SplitText";
import ShinyText from "../../HelpComponents/ShinyText/ShinyText";

const MainSplitText = () => {
  return (
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
  );
};

export default MainSplitText;
