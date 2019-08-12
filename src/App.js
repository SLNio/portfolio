import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div id="app" className="App">
        <header className="App-header">
          <nav className="toolbar_navigation">
            <ul>
              <li>
                <NavLink
                  activeClassName="selected"
                  exact
                  className="navigation"
                  to={`/`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="selected"
                  className="navigation"
                  to={`/galleries`}
                >
                  Galleries
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="selected"
                  className="navigation"
                  to={`/contact`}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div className="App-main">
          <span className="mainspan">
            <Main />
          </span>
        </div>
      </div>
    </HashRouter>
  );
}
export default App;
