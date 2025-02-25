import { NavLink, useLocation  } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const isMovieDetailPage = location.pathname.startsWith("/MovieDetail");
    if (isMovieDetailPage) return null;

    return (
      <footer className="mt-auto"> 

        <div className="flex justify-center">
            <nav className="py-5">
                <ul className="flex justify-center uppercase gap-20 text-sm translate-x-2">
                    <li>
                        <NavLink to="/">
                        {({ isActive }) => (
                            <img
                            src={isActive ? "/footer/homeO.svg" : "/footer/Home.svg"}
                            alt="Home"
                            className="scale-140"
                            />
                        )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/discover">
                        {({ isActive }) => (
                            <img
                            src={isActive ? "/footer/searchO.svg" : "/footer/search.svg"}
                            alt="Discover"
                            className="scale-120"
                            />
                        )}
                        </NavLink>
                    </li>
                        {/* <NavLink to="/profil"> */}
                        <li>
                        <NavLink to="/profil">
                        {({ isActive }) => (
                            <img
                            src={isActive ? "/footer/profilO.svg" : "/footer/profil.svg"}
                            alt="Profil"
                            className=""
                            />
                        )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

      </footer>
    );
  }
  
  export default Footer;
  