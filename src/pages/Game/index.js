import "./style.css";

import React, { useState } from "react";

import Footer from "../../components/footer";
import QuizItem from "../../components/QuizItem";
import axios from "axios";

const Game = () => {

  const {category, difficulty} = JSON.parse(localStorage.getItem("game_info"));
  const MAX_QUESTIONS = 10;
  const [questionsCounter, setQuestionsCounter] = useState(0);
  // const [currentQuestion, setCurrentQuestion] = useState();
  const [questions, setQuestions] = useState([]);

  
  const generateQuestions = async (num, cat, dif) => {
    const options = {
      params: {
        amount: num,
        category: cat,
        difficulty: dif,
        type: 'multiple'
      }
  }
  let url = `https://opentdb.com/api.php`
  
    try {
        let res = await axios.get(url, options)
        let data = await res.data.results
        // console.log(data);
        setQuestions(data)
    } catch (e) {
        console.log(e);
    }
  }
  questions.length <= 0 && generateQuestions(MAX_QUESTIONS, category, difficulty)
  return (
    <div>
      <div className="container-alt">
        {
          questions.length <= 0 ?( <div id="loader"></div>):(<QuizItem max = {MAX_QUESTIONS} count = {questionsCounter} action = {setQuestionsCounter} question = {questions[questionsCounter]} />)
        }
      </div>
      <Footer />
    </div>
  );
};

export default Game;
