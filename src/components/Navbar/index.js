import { NavLink as Link } from "react-router-dom";

import styles from "./styles.scss";

const links = [
  { path: "/", label: "Inicio" },
  { path: "/creacionales", label: "Creacionales" },
  { path: "/estructurales", label: "Estructurales" },
  { path: "/comportamentales", label: "Comportamentales" },
];

function Navbar() {
  return (
    <nav className={styles["navbar"]}>
      {links.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={styles["navbar__link"]}
          activeClassName={styles["navbar__link--active"]}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
