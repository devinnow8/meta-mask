import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import HomeCard from "./components/HomeCard";
import LoginCard from "./components/LoginCard";
import TermsCard from "./components/TermsCard";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomeCard />}></Route>
        <Route exact path="/terms" element={<TermsCard />}></Route>
        <Route exact path="/login" element={<LoginCard />}></Route>
      </Routes>
    </div>
  );
};

export default App;
