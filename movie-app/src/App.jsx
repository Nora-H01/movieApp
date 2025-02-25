import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Profil from "./pages/Profil";
import MovieDetail from "./pages/MovieDetail";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Flexbox pour coller le footer en bas */}
      <div className="flex flex-col min-h-screen bg-movie-black">
        <Header />
        {/* Contenu principal qui prend l'espace restant */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
        {/* Footer reste collé en bas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
