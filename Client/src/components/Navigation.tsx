import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Navigation.css";

export const Navigation = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <nav className="nav">
            <ul className="ul">
                <li className="li">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="li">
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
                <li className="li">
                    {isAuthenticated ? (
                        <NavLink to="/" onClick={() => logout({})}>
                            Logout
                        </NavLink>
                    ) : (
                        <NavLink to="/" onClick={() => loginWithRedirect()}>
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};
