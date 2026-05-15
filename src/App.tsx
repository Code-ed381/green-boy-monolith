import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Music from "./pages/Music";
import Production from "./pages/Production";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <div className="max-w-full mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist" element={<Artists />} />
          <Route path="/music" element={<Music />} />
          <Route path="/production" element={<Production />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
