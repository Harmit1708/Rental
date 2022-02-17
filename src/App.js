import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/Components/Header";
import Dashboard from "../src/Components/Dashboard";
import Cart from "../src/Components/Cart";
import Login from "../src/Components/Login";
import Signup from "../src/Components/Signup";
// Pages
import Camera from "../src/Pages/Camera";
import Evbike from "../src/Pages/EvBike";
import Bicycle from "../src/Pages/Bicycle";
import Tripad from "../src/Pages/Tripad";
import AtmosShogunMonitor from "../src/Pages/AtmosShogunMonitor";

export const rentContext = React.createContext();

function App() {
  let [cart, setCart] = useState([]);

  let [cartValue, setCartValue] = useState([cart.length]);

  return (
    <div className="App">
      <BrowserRouter>
        <rentContext.Provider
          value={{ cart, setCart, cartValue, setCartValue }}
        >
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/ev-bike" element={<Evbike />} />
            <Route path="/bicycle" element={<Bicycle />} />
            <Route path="/tripad" element={<Tripad />} />
            <Route
              path="/atmos-shougn-monitor"
              element={<AtmosShogunMonitor />}
            />
          </Routes>
        </rentContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
