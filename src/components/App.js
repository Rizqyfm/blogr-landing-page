import React from "react";
import Navbar from "./Nav/Navbar";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer/Footer";
import "./Homepage/Homepage.css";
import "./Nav/Navbar.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
