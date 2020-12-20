import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <HeaderNavItem exact to="/" name="Home" />
            <HeaderNavItem to="/users" name="Users" />
            <HeaderNavItem to="/cupboards" name="Cupboards" />
        </header>
    );
}

function HeaderNavItem(props) {
    return (
        <NavLink
            to={props.to}
            className="nav-item"
            exact={!!props.exact}
            activeClassName="active"
        >
            {props.name}
        </NavLink>
    );
}