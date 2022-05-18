import React, { useState } from "react";

const choices = ['A', 'B', 'C', 'D', 'E']
const QuizItem = ({max, count, question, action}) => {
    // document.getElementById('question').innerHTML = question.question
    const answerIndex = Math.floor(Math.random() * question.incorrect_answers.length)
    const [options, setOptions] = useState(question.incorrect_answers)
    const [score, setScore] = useState(0)
    const newArr = [...options]
    // console.log(answerIndex);
    newArr.splice(answerIndex, 0, question.correct_answer)
    options.length <=3 && setOptions(newArr);


    // add correct answer to answers
    const handleChoice = (e) => {
        let selectedChoiceIndex = e.currentTarget.dataset.index
        if(selectedChoiceIndex == answerIndex)
        {
            e.currentTarget.classList.add('correct');
            setScore(score+1)
        }else{
            e.currentTarget.classList.add('incorrect');
        }
        
        if(count < max)
        {
            action(count+1)
        }else{
            alert('FInish')
        }
    }
  return (
    <div id="game" className="text-center flex-column ">
      <div id="hud">
        <div id="hud-item">
          <p className="hud-prefix">
            Question: <span id="questionCounter">{count+1} / {max}</span>
          </p>
          <div className="progress-bar">
            <div className="progress-bar-full" id="progress-bar"></div>
          </div>
        </div>

        <div id="hud-item">
          <p className="hud-prefix">Score</p>
          <h1 className="hud-main-text text-center" id="score">
            {score}
          </h1>
        </div>
      </div>
      <h2 id="question">{question.question} </h2>
        {
        options.map((ch, index) => (
            <div className="choice-container" data-index = {index} key={index} onClick = {(e) => handleChoice(e)}>
            <p className="choice-prefix">{choices[index]}</p>
            <p className="choice-text">{ch}</p>
          </div>
        ))
        }


    </div>
  );
};

export default QuizItem;
