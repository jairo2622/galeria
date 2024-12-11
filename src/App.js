import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/img/arte.png";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Arte from "./components/Arte";
import Naturaleza from "./components/Naturaleza";
import Tecnologia from "./components/Tecnologia";
import Presentacion from "./components/Presentacion";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid justify-content-center">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" className="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item titulos">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item titulos">
                  <Link className="nav-link" to="/presentacion">
                    Presentación
                  </Link>
                </li>
                <li className="nav-item dropdown titulos">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="a">
                    Categorías
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item categorias" to="/tecnologia">
                        Tecnología
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item categorias" to="/naturaleza">
                        Naturaleza
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item categorias" to="/arte">
                        Arte
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/arte" element={<Arte />} />
          <Route path="/naturaleza" element={<Naturaleza />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/presentacion" element={<Presentacion />} />
          <Route path="/" element={<Naturaleza />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
