import PatternCategory from "../../components/PatternCategory";

const PATRONES_COMPORTAMENTALES = [
  {
    path: "/",
    exact: true,
    component: () => <h3>{"Comportamentales Home"}</h3>,
  },
  {
    path: "/interpreter",
    label: "Interpreter",
    component: () => <h3>{"Interpreter"}</h3>,
  },
  {
    path: "/template-method",
    label: "Template Method",
    component: () => <h3>{"Template Method"}</h3>,
  },
  {
    path: "/chain-responsability",
    label: "Chain Of Responsability",
    component: () => <h3>{"Chain Of Responsability"}</h3>,
  },
  {
    path: "/command",
    label: "Command",
    component: () => <h3>{"Command"}</h3>,
  },
  {
    path: "/iterator",
    label: "Iterator",
    component: () => <h3>{"Iterator"}</h3>,
  },
  {
    path: "/mediator",
    label: "Mediator",
    component: () => <h3>{"Mediator"}</h3>,
  },
  {
    path: "/memento",
    label: "Memento",
    component: () => <h3>{"Memento"}</h3>,
  },
  {
    path: "/observer",
    label: "Observer",
    component: () => <h3>{"Observer"}</h3>,
  },
  {
    path: "/state",
    label: "State",
    component: () => <h3>{"State"}</h3>,
  },
  {
    path: "/strategy",
    label: "Strategy",
    component: () => <h3>{"Strategy"}</h3>,
  },
  {
    path: "/visitor",
    label: "Visitor",
    component: () => <h3>{"Visitor"}</h3>,
  },
];

function Comportamentales({ match: { path } }) {
  return (
    <PatternCategory
      title="Patrones Comportamentales"
      basePath={path}
      routes={PATRONES_COMPORTAMENTALES}
    />
  );
}

export default Comportamentales;
