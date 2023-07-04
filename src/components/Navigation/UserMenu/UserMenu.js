import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "redux/thunks";
import './UserMenu.css';

export function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.auth.user.name);

    const handleLogout = () => {
        dispatch(logOutThunk());
    };

    return (
        <div className="userMenuContainer">
            <span className="welcomeMessage">Вітаємо, {name}</span>
            <button className="logoutButton" type="button" onClick={handleLogout}>
                Вийти
            </button>
        </div>
    );
}
