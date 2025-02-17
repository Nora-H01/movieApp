import { NavLink, useLocation  } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const isMovieDetailPage = location.pathname.startsWith("/MovieDetail");
    if (isMovieDetailPage) return null;

    return (
      <footer> 

        <div className="flex justify-center">
            <nav className="py-5">
                <ul className="flex justify-center uppercase gap-20 text-sm">
                    <li>
                        <NavLink to="/">
                        {({ isActive }) => (
                            <img
                            src={isActive ? "/footer/homeO.svg" : "/footer/Home.svg"}
                            alt="Home"
                            className="scale-110"
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
                        <NavLink to="/MovieDetail">
                        {({ isActive }) => (
                            <img
                            src={isActive ? "/footer/profilO.svg" : "/footer/profil.svg"}
                            alt="Profil"
                            className="scale-110"
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
  