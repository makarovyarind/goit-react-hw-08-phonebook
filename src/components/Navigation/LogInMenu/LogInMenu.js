import { NavLink } from "react-router-dom";
import './LogInMenu.css';

export function LoginMenu() {
    return (
        <ul className="loginList">
            <li className="loginItem">
                <NavLink to="/login" className="loginLink">
                    Вхід
                </NavLink>
            </li>
            <li className="registerItem">
                <NavLink to="/registration" className="registerLink">
                    Зареєструватися
                </NavLink>
            </li>
        </ul>
    );
}
