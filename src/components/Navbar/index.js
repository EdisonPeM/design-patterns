import { useRef, useState } from "preact/hooks";
import useRemoveFocus from "../../hooks/useRemoveFocus";
import { Button } from "../Form";
import NavLink from "../NavLink";

import styles from "./styles.scss";

const links = [
  { path: "/", label: "Home", exact: true },
  { path: "/creationals", label: "Creationals" },
  { path: "/structurals", label: "Structurals" },
  { path: "/behaviorals", label: "Behaviorals" },
];

function Navbar() {
  const [show, setShow] = useState(false);
  const showMenu = () => setShow(!show);
  const navRef = useRef(null);
  useRemoveFocus({ ref: navRef, remove: !show });

  return (
    <nav
      className={`${styles["navbar"]} ${show ? styles["navbar--show"] : ""}`}
    >
      <div ref={navRef} class={styles["navbar__links"]}>
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
      </div>
      <div class={styles["navbar__icon"]}>
        <Button class="shadow-none hover:bg-transparent" onClick={showMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {show ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            ) : (
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            )}
          </svg>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
