import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Navigation = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

const
    { isLoading, error } = useAuth0();

    if (isLoading) {

        return <div className="h-16"></div>;
      
      }
      else if (error) {
        return <div>Oops...we messe up {error.message}</div>;
      }

    return (
        <nav className="w-full border h-16 ">
            <ul className=" flex pt-4 justify-center ">
                <li className="">
                    <NavLink className="text-3xl text-white	 " to="/">Search</NavLink>
                </li>
                <li className="">
                    <NavLink to="/favorites" className="text-3xl m-36 text-white	">Favorites</NavLink>
                </li>
                <li className="li">
                    {isAuthenticated ? (
                        <NavLink to="/" onClick={() => logout({})} className="text-3xl text-white	">
                            Logout
                        </NavLink>
                    ) : (
                        <NavLink to="/" onClick={() => loginWithRedirect()} className="text-3xl text-white	">
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};
