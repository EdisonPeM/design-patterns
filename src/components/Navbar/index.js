import NavLink from "../NavLink";

import styles from "./styles.scss";

const links = [
  { path: "/", label: "Home", exact: true },
  { path: "/creationals", label: "Creationals" },
  { path: "/structurals", label: "structurals" },
  { path: "/behaviorals", label: "Behaviorals" },
];

function Navbar() {
  return (
    <nav className={styles["navbar"]}>
      {links.map(({ path, label, exact }) => (
        <NavLink
          key={path}
          to={path}
          exact={exact}
          className={styles["navbar__link"]}
          activeClassName={styles["navbar__link--active"]}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
