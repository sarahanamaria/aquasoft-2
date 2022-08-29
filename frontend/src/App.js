import "./App.css";
import Projects from "./pages/Projects/Projects";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Candidates from "./pages/Candidates";

// pages

function App() {
  return (
    <BrowserRouter>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#8aa0b8" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">AquaSoft</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to={"/projects"}>
                Projects
              </Link>
              <Link className="nav-link" to={"/candidates"}>
                Candidates
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/candidates"} element={<Candidates />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
