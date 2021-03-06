import PatternCategory from "../../components/PatternCategory";

const STRUCTURAL_PATTERNS = [
  {
    path: "/",
    exact: true,
    component: () => <h3>{"Structurals Patterns Home"}</h3>,
  },
  {
    path: "/adapter",
    label: "Adapter",
    component: () => <h3>{"Adapter"}</h3>,
  },
  {
    path: "/bridge",
    label: "Bridge",
    component: () => <h3>{"Bridge"}</h3>,
  },
  {
    path: "/composite",
    label: "Composite",
    component: () => <h3>{"Composite"}</h3>,
  },
  {
    path: "/decorator",
    label: "Decorator",
    component: () => <h3>{"Decorator"}</h3>,
  },
  {
    path: "/facade",
    label: "Facade",
    component: () => <h3>{"Facade"}</h3>,
  },
  {
    path: "/flyweight",
    label: "Flyweight",
    component: () => <h3>{"Flyweight"}</h3>,
  },
  {
    path: "/proxy",
    label: "Proxy",
    component: () => <h3>{"Proxy"}</h3>,
  },
];

function Structurals({ match: { path } }) {
  return (
    <PatternCategory
      title="Structural Patterns"
      basePath={path}
      routes={STRUCTURAL_PATTERNS}
    />
  );
}

export default Structurals;
