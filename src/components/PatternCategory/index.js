import { useEffect, useRef, useState } from "preact/hooks";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import useRemoveFocus from "../../hooks/useRemoveFocus";
import { Button } from "../Form";
import NavLink from "../NavLink";

import styles from "./styles.scss";

<article className={styles["pattern"]}>{"Hola Mundo"}</article>;

function PatternCategory({ title, basePath, routes }) {
  const [show, setShow] = useState(false);
  const showMenu = () => setShow(!show);

  const location = useLocation();
  useEffect(() => {
    setTimeout(() => setShow(false), 200);
  }, [location]);

  const navRef = useRef(null);
  useRemoveFocus({ ref: navRef, remove: !show });

  useEffect(() => {
    if (!show) return;
    const el = navRef.current;

    // Handle Focus outside navbar
    const blurHandler = () => {
      setTimeout(() => {
        if (!el.contains(document.activeElement)) {
          setShow(false);
        }
      });
    };

    // Handle Click outside navbar
    const handlerClick = ({ target }) => {
      if (el !== target && !el.contains(target)) {
        setShow(false);
      }
    };

    // Handle Escape key press
    const handleKey = ({ key }) => {
      if (key === "Escape") {
        setShow(false);
      }
    };

    el.addEventListener("focusout", blurHandler);
    document.addEventListener("click", handlerClick);
    document.addEventListener("keyup", handleKey);
    return () => {
      el.removeEventListener("focusout", blurHandler);
      document.removeEventListener("click", handlerClick);
      document.removeEventListener("keyup", handleKey);
    };
  }, [show]);

  return (
    <section
      className={`${styles["category"]} ${
        show ? styles["category--show"] : ""
      }`}
    >
      <div className={styles["category__icon"]}>
        <Button class="shadow-none hover:bg-transparent" onClick={showMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </Button>
      </div>
      <nav ref={navRef} className={styles["category__sidenav"]}>
        <ul className={styles["category__sidenav__list"]}>
          {routes.map(
            ({ path, label }) =>
              label && (
                <li key={path} className={styles["category__sidenav__item"]}>
                  <NavLink
                    exact
                    to={`${basePath}${path}`}
                    className={styles["category__sidenav__link"]}
                    activeClassName={styles["category__sidenav__link--active"]}
                  >
                    <span>{label}</span>
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </nav>
      <div className={styles["category__content"]}>
        <h2 className={styles["category__title"]}>{title}</h2>
        <Switch>
          {routes.map(({ path, component: Component, exact }) => (
            <Route
              exact={exact}
              key={path}
              path={`${basePath}${path}`}
              component={Component}
            />
          ))}

          {/* 404 returns to initial page */}
          <Route path={`${basePath}/*`}>
            <Redirect from={`${basePath}/*`} to={basePath} />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default PatternCategory;
