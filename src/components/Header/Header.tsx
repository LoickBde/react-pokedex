import { Link } from "@tanstack/react-router";
import { ThemeSwticher } from "../ThemeSwitcher";

export const Header = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 drop-shadow-md">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            React Pokedex
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link 1</a>
            </li>
            <li>
              <a>Link 2</a>
            </li>
            <li>
              <a>Link 3</a>
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
