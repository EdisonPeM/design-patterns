import { Route, Switch, Link, Redirect } from "react-router-dom";

import styles from "./styles.scss";

<article className={styles["pattern"]}>{"Hola Mundo"}</article>;

function PatternCategory({ title, basePath, routes }) {
  return (
    <section className={styles["category"]}>
      <nav className={styles["category__sidenav"]}>
        <ul className={styles["category__sidenav__list"]}>
          {routes.map(
            ({ path, label }) =>
              label && (
                <li key={path} className={styles["category__sidenav__item"]}>
                  <Link
                    to={`${basePath}${path}`}
                    className={styles["category__sidenav__link"]}
                  >
                    {label}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>
      <div className={styles["category__content"]}>
        <h2 className={styles["category__title"]}>{title}</h2>
        <Switch>
          {routes.map(({ path, component: Component }) => (
            <Route
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
