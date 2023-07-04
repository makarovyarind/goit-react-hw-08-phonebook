import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export function PublicRoute ({ children, registered = false }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const shouldRedirect = isLoggedIn && registered;
    return (
        <div>
            {shouldRedirect ? <Navigate to="/contacts" /> : children }
        </div>
    )

}