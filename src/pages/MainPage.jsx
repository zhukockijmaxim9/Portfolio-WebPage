import "../styles/pagesStyle/Main.css";
import Particles from "../HelpComponents/Particles/Particles";
import MainSplitText from "../components/MainSplitText/MainSplitText";
import Buttons from "../components/Button/Buttons";
// import Slik from ".././HelpComponents/Slik/Slik";

// const generateBackground = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

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
      <section className="first-section">
        <MainSplitText />
        <Buttons />
      </section>
      <section className="second-section"></section>
      <div className="className" />
    </div>
  );
};

export default MainPage;
