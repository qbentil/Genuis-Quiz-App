import Footer from "../../components/footer";
import React from "react";

const Select = () => {
  return (
    <div>
      <div className="container">
        <div id="end" className="flex-center flex-column">
          <h1>-- Select Quiz --</h1>
          <button className="btn" onclick="getQuestionSet('general')" id="general">
            General
          </button>
          <button className="btn" onclick="getQuestionSet('html')" id="html">
            HTML
          </button>
          <button className="btn" onclick="getQuestionSet('css')" id="css">
            CSS
          </button>
          <button
            className="btn"
            onclick="getQuestionSet('javascript')"
            id="javascript"
          >
            JavaScript
          </button>
          <button className="btn" onclick="getQuestionSet('php')" id="php">
            PHP
          </button>
          <button className="btn" onclick="getQuestionSet('python')" id="python">
            Python
          </button>
          <button className="btn" onclick="getQuestionSet('java')" id="java">
            Java
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Select;
