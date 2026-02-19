import "./navigation.scss";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#projects", label: "Проекты" },
  { href: "#contact", label: "Контакты" },
];

function Navigation() {
  return (
    <nav className="main-navigation" aria-label="Навигация по разделам">
      {links.map((link) => (
        <a key={link.href} className="nav-link" href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
