import React from "react";
import Footer from "../../components/footer";
import './style.css'

const Game = () => {
  return (
    <div>
      <div className="container-alt">
        <div id="loader hidden"></div>
        <div id="game" className="text-center flex-column ">
          <div id="hud">
            <div id="hud-item">
              <p className="hud-prefix">
                Question: <span id="questionCounter"></span>
              </p>
              <div className="progress-bar">
                <div className="progress-bar-full" id="progress-bar"></div>
              </div>
            </div>

            <div id="hud-item">
              <p className="hud-prefix">Score</p>
              <h1 className="hud-main-text text-center" id="score">
                0
              </h1>
            </div>
          </div>
          <h2 id="question">What is the answer to this question?</h2>
          <div className="choice-container">
            <p className="choice-prefix">A</p>
            <p className="choice-text" data-number="1">
              Choice 1
            </p>
          </div>
          <div className="choice-container">
            <p className="choice-prefix">B</p>
            <p className="choice-text" data-number="2">
            Infinitbility is a tech blog created with the sole purpose of explaining complex tech in a simple and concise way thus creating value for budding developers out there.
            </p>
          </div>
          <div className="choice-container">
            <p className="choice-prefix">C</p>
            <p className="choice-text" data-number="3">
              Choice 3
            </p>
          </div>
          <div className="choice-container">
            <p className="choice-prefix">D</p>
            <p className="choice-text" data-number="4">
              Choice 4
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Game;
