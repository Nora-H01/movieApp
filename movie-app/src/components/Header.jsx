import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isMovieDetailPage = location.pathname.startsWith("/MovieDetail"); // Vérifie si on est sur une page de détail

  if (isMovieDetailPage) return null; // Ne pas afficher le header sur MovieDetail

  return (
    <header className="w-screen font-lato py-6 pl-3 text-2xl grid grid-cols-2">
      <div>
        <h1 className="mx-2 -tracking-1">
          <span className="bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent">Movie</span>
          <span className="text-white">Browser</span>
        </h1>
      </div>

    <div className="flex justify-end mr-6 mt-2 items-center text-xs inline-flex">
        <div className="">
          <NavLink
              to="/signup"
              className={({ isActive }) =>
              `px-1 py-[0.1rem] rounded-tl-lg rounded-bl-lg transition ${
                  isActive
                  ? "bg-gradient-to-tr from-movie-orangeDark to-movie-orange text-white"
                  : "border border-movie-orange text-white hover:bg-gradient-to-tr hover:from-movie-orangeDark hover:to-movie-orange"
              }`
              }
          >
              Sign up
          </NavLink>
        </div>

          <div className="">
          <NavLink
              to="/login"
              className={({ isActive }) =>
              `px-1 py-[0.1rem] rounded-tr-lg rounded-br-lg transition ${
                  isActive
                  ? "bg-gradient-to-tr from-movie-orangeDark to-movie-orange text-white"
                  : "border border-movie-orange text-white hover:bg-gradient-to-tr hover:from-movie-orangeDark hover:to-movie-orange"
              }`
              }
          >
              Login
          </NavLink>
          </div>
    </div> 


    </header>
  );
}

export default Header;
