import React from 'react'
//takes the value from parent and displays them
const ScoreBoard = ({ currentScore, bestScore }) => {
    return (
        <div className='scoreboard'>
            <p>Current Score:{currentScore}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    )
}

export default ScoreBoard