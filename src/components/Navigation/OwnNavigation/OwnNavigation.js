import { NavLink } from "react-router-dom";
import './OwnNavigation.css';

export function OwnNavigation() {
    return (
        <ul className="ownNavigationList">
            <li className="ownNavigationItem">
                <NavLink
                    exact
                    to="/"
                    className="ownNavigationLink"
                    activeClassName="ownNavigationLinkActive"
                >
                    Головна
                </NavLink>
            </li>
            <li className="ownNavigationItem">
                <NavLink
                    to="/contacts"
                    className="ownNavigationLink"
                    activeClassName="ownNavigationLinkActive"
                >
                    Книга контактів
                </NavLink>
            </li>
        </ul>
    );
}
