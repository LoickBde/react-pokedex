import { Link } from "@tanstack/react-router";
import { ThemeSwticher } from "../ThemeSwitcher";

export const Header = () => {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            React Pokedex
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/layoutA">Layout A</Link>
            </li>
            <li>
              <Link to="/layoutA/layoutAA">Layout AA</Link>
            </li>
            <li>
              <Link to="/layoutB">Layout B</Link>
            </li>
            <li>
              <Link to="/layoutB/layoutBB">Layout BB</Link>
            </li>
            <li>
              <Link to="/layoutC">Layout C</Link>
            </li>
            <li>
              <a>coucou</a>
            </li>
          </ul>
          <div className="mx-2">
            <ThemeSwticher />
          </div>
        </div>
      </div>
    </nav>
  );
};
