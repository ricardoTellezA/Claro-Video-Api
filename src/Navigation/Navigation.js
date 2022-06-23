import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "../pages/movies";
import MovieDescription from "../pages/movieDescription";
const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movieDescription/:id" element={<MovieDescription />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
