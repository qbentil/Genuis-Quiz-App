import React from "react";
import Footer from "../../components/footer";
import {Link } from 'react-router-dom'
import './style.css'
const HighScroes = () => {
  return (
    <div>
      <div className="container">
        <div id="highScores" className="flex-center flex-column">
          <h1 id="finaleScores">High Scores</h1>
          <ul id="highScoresList"></ul>
          <Link to={'/'} className="btn">
            Go Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HighScroes;
