import PatternCategory from "../../components/PatternCategory";

const PATRONES_COMPORTAMENTALES = [];

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
