import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Speak from "./Speak";
import Audio from "./Audio";
import Login from "./Login";

function App() {
  return (
    <div className="app">
        <BrowserRouter>
          <Header />
          <main className="home">
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/Speak" element={<Speak />} />
              <Route path="/Audio" element={<Audio />} />
              <Route path="Login" element={<Login />} />
            </Routes>
          </main>
        </BrowserRouter>
    </div>

  )
}

export default App;
