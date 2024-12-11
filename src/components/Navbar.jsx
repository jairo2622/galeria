import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/arte.png";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Arte from './arte';
import Naturaleza from './Naturaleza';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid justify-content-center">
        <a className="navbar-brand" href="a">
          <img src={logo} alt="" className="logo" />
        </a>
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
              <a className="nav-link" href="a">
                Home
              </a>
            </li>
            <li className="nav-item titulos">
              <a className="nav-link" href="a">
                Presentación
              </a>
            </li>
            <li className="nav-item dropdown titulos">
              <a
                className="nav-link dropdown-toggle"
                href="a"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu">
                <BrowserRouter>
                  <li>
                    <Link className="dropdown-item categorias" to="/Tecnologia">
                      Tecnologia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item categorias" to="/Naturaleza">
                      Naturaleza
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item categorias" to="/Arte">
                      Arte
                    </Link>
                  </li>

                  <Route path="/Arte">
                    <Arte />
                  </Route>
                  <Route path="/Naturaleza">
                    <Naturaleza />
                  </Route>
                </BrowserRouter>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
