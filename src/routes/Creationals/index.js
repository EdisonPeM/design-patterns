import PatternCategory from "../../components/PatternCategory";

import FactoryMethod from "./FactoryMethod";
import AbstractFactory from "./AbstractFactory";
import Builder from "./Builder";
import BuilderComplex from "./BuilderComplex";

const CREATIONALS_PATTERNS = [
  {
    path: "/",
    exact: true,
    component: () => <h3>{"Creationals Patterns Home"}</h3>,
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
    component: Builder,
  },
  {
    path: "/builder-2",
    label: "Builder Complex",
    component: BuilderComplex,
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

function Creationals({ match: { path } }) {
  return (
    <PatternCategory
      title="Creational Patterns"
      basePath={path}
      routes={CREATIONALS_PATTERNS}
    />
  );
}

export default Creationals;
