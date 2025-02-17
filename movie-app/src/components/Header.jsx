import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isMovieDetailPage = location.pathname.startsWith("/MovieDetail"); // Vérifie si on est sur une page de détail

  if (isMovieDetailPage) return null; // Ne pas afficher le header sur MovieDetail

  return (
    <header className="w-screen font-lato py-7 pl-3 text-2xl overflow-hidden">
      <h1 className="mx-2 -tracking-1">
        <span className="bg-gradient-to-tr from-movie-orangeDark to-movie-orange bg-clip-text text-transparent">Movie</span>
        <span className="text-white">Browser</span>
      </h1>
    </header>
  );
}

export default Header;
