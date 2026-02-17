import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <nav className="main-navigation container">
      <a href="#about" className="nav-link">
        Обо мне
      </a>
      <Link to="/projects" className="nav-link">
        Проекты
      </Link>
      <a href="#contact" className="nav-link">
        Контакты
      </a>
    </nav>
  );
}

export default Navigation;
