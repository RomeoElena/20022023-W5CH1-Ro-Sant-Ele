import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { MenuOption } from "../app/app";
import "./nav.scss";

export type MenuProps = {
  options: MenuOption[];
};

export function Nav({ options }: MenuProps) {
  return (
    <nav className="nav__container">
      <ul className="nav__list">
        {options.map((item: MenuOption) => (
          <li key={item.label} className="nav__option">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
