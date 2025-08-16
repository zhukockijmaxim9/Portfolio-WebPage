import Button from "./Button";
import FadeContent from "../../HelpComponents/Fade/FadeContent";
import "./Buttons.css";

const Buttons = () => {
  return (
    <FadeContent blur={true} duration={2000} easing="ease-out" initialOpacity={0} delay={3000} className="buttons">
      <Button className="secondary">Проекты</Button>
      <Button className="secondary">Обо мне</Button>
    </FadeContent>
  );
};

export default Buttons;
