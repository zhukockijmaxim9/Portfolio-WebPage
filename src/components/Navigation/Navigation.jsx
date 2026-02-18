import { Link } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  return (
    <nav className="main-navigation">
      <Link className="nav-link">Обо мне</Link>
      <Link className="nav-link">Проекты</Link>
      <Link className="nav-link">Контакты</Link>
    </nav>
  );
}

export default Navigation;
