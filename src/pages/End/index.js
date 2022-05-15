import React from 'react'
import Footer from '../../components/footer'
import {Link } from 'react-router-dom'
const End = () => {
  return (
    <div>
          <div className="container">
        <div id="end" className="flex-center flex-column">
            <h2 className="final-score">Final Score</h2>
            <h1><span id="finalScore">0 </span><span> points</span></h1>
            <form action="" method="POST" autocomplete="off">
                <input type="text" name="username" placeholder="username" id="username" />
                <small><i>Hint: </i>Enter username to enable save.</small>
                <button type="submit" className="btn" id="saveScoreBtn" onclick="saveHighScore(event)" disabled title="Enter name first">Save</button>
            </form>
            {/* <a href="review.html" className="btn">Review Quiz</a> */}
            <Link to="/game" className="btn">Play Again</Link>
            <Link to="/select" className="btn">Select New Quiz</Link>
            <Link to="/" className="btn">Go Home</Link>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default End