import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import About from "./components/AboutPages";
import Home from "./components/HomePages";
import Interesting from "./components/InterestingPages";
import './index.css';


function App() {
  return (
    <div>
      <div>
        <h1 className="heading">IT Company</h1>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Interesting" element={<Interesting />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav className="switch-side">
        <ul>
          <li>
            <Link className="list-side" to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="list-side" to="/About">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="list-side" to="/Interesting">Interesting</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}



export default App;
