import PatternCategory from "../../components/PatternCategory";

const PATRONES_ESTRUCTURALES = [];

function Estructurales({ match: { path } }) {
  return (
    <PatternCategory
      title="Patrones Estructurales"
      basePath={path}
      routes={PATRONES_ESTRUCTURALES}
    />
  );
}

export default Estructurales;
