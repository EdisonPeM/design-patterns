import PatternCategory from "../../components/PatternCategory";

const PATRONES_CREACIONALES = [];

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
