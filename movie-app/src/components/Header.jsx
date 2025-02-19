import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isMovieDetailPage = location.pathname.startsWith("/MovieDetail"); // Vérifie si on est sur une page de détail

  if (isMovieDetailPage) return null; // Ne pas afficher le header sur MovieDetail

  return (
    <header className="w-screen font-lato py-7 pl-3 text-2xl grid grid-cols-2">
      <h1 className="mx-2 -tracking-1">
        <span className="bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent">Movie</span>
        <span className="text-white">Browser</span>
      </h1>

      <div className="flex justify-end mr-12">
          <NavLink to="/profil">
              {({ isActive }) => (
                <img
                  src={isActive ? "/footer/profilO.svg" : "/footer/profil.svg"}
                  alt="Profil"
                  className="scale-110"
                />
              )}
          </NavLink>
      </div>
    </header>
  );
}

export default Header;
