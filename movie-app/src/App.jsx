import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Profil from "./pages/Profil";
import MovieDetail from "./pages/MovieDetail";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-movie-black min-h-screen">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/MovieDetail" element={<MovieDetail />} />
            <Route path="/profil" element={<Profil />} />
            {/* <Route path="/movie/:id" element={<MovieDetail />} />  */}
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
