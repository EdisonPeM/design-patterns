import PatternCategory from "../../components/PatternCategory";

import AbstractFactory from "./AbstractFactory";
import FactoryMethod from "./FactoryMethod";

const PATRONES_CREACIONALES = [
  {
    path: "/",
    exact: true,
    component: () => <h3>{"Creacionales Home"}</h3>,
  },
  {
    path: "/factory-method",
    label: "Factory Method",
    component: FactoryMethod,
  },
  {
    path: "/abstract-factory",
    label: "Abstract Factory",
    component: AbstractFactory,
  },
  {
    path: "/builder",
    label: "Builder",
    component: () => <h3>{"Builder"}</h3>,
  },
  {
    path: "/prototype",
    label: "Prototype",
    component: () => <h3>{"Prototype"}</h3>,
  },
  {
    path: "/singleton",
    label: "Singleton",
    component: () => <h3>{"Singleton"}</h3>,
  },
];

function Creacionales({ match: { path } }) {
  return (
    <PatternCategory
      title="Patrones Creacionales"
      basePath={path}
      routes={PATRONES_CREACIONALES}
    />
  );
}

export default Creacionales;
