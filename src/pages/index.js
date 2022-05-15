import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
// import {RiQuestionAnswerLine} from 'react-icons/ri'
const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div id="home" className="flex-center flex-column">
          <div className="dev flex-center flex-column">
            <img src={logo} alt="" id="me" />
            {/* <RiQuestionAnswerLine  id="me" color='red' /> */}
            <small id="welcome">Welcome To</small>
          </div>
          <h1 className="text-center">
            <span className="code"></span>QENUIS <span className="code"></span>{" "}
            Quiz
          </h1>
          <Link to={"/game"} className="btn">
            Start A Quiz
          </Link>
          <Link to={"highscores"} className="btn">
            High Scores
          </Link>
          <div className="flext-center flex-column"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
