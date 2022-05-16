// import { Categories, Difficulties } from "../../data";

import React, { useState } from "react";

import Category from "../../components/Category";
import Difficulty from "../../components/Difficulty";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

const Select = () => {
  const [category, setCategory] = useState(null)
  const [difficulty, setDifficulty] = useState(null)
  const [selector, setSelector] = useState('category')

  const prepareGame = () => {
    localStorage.setItem('category',JSON.stringify(category))
    localStorage.setItem('difficulty',JSON.stringify(difficulty))
    // window.location.href = "localhost:3001/game"
  }
  return (
    <>
      <div className="container flex-column">
        {
          selector === 'category' && (
            <Category setCategory={setCategory} />
          )
        }   
        {
                    selector === 'difficulty' && (
                      <Difficulty setDifficulty={setDifficulty} />
                    )
        }   

          <br /><br />
          {
            category != null && selector === 'category' && (
              <button className="btn btn-selected" onClick={() => setSelector('difficulty')}>Continue ==&gt; {category.title}</button>
            )
          }
          {
            difficulty != null && selector === 'difficulty' &&(
              
              <Link to='/game'  className="btn btn-selected" onClick={() => prepareGame()}>Continue ==&gt; {difficulty.title}</Link>
            )
          }
          {
          selector === 'difficulty' &&(
              
              <button  className="btn btn-danger" onClick={() => setSelector('category')}>Change Category</button>
            )
          }
      </div>
      <Footer />
    </>
  );
};

export default Select;
