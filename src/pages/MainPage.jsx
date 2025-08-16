import "../styles/pagesStyle/Main.css";
import Particles from "../HelpComponents/Particles/Particles";
import MainSplitText from "../components/MainSplitText/MainSplitText";
import Buttons from "../components/Button/Buttons";

const MainPage = () => {
  return (
    <div className="main-page">
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
      <MainSplitText />
      <Buttons />
      <div className="className" />
    </div>
  );
};

export default MainPage;
