import { Link, useLocation } from "react-router-dom";

function NavLink({ to, exact, className, activeClassName, children }) {
  const { pathname } = useLocation();
  const isActive = exact ? pathname === to : pathname.startsWith(to);

  return (
    <Link to={to} className={`${className} ${isActive ? activeClassName : ""}`}>
      {children}
    </Link>
  );
}

export default NavLink;
