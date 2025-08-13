import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  return (
    <nav>
      <Link to="/projects" className="link">
        Проекты
      </Link>
      <Link to="/" className="link">
        Главная
      </Link>
      <Link to="/contact" className="link">
        Контакты
      </Link>
    </nav>
  );
}

export default Navigation;
