import React, { useState, useEffect } from 'react';
import Card from './Cards';
import Scoreboard from './ScoreBoard';
import './MemoryGame.css';

//this is where our most of the game logic works. We are using four different useState and through 
//this we are passing prop to scoreboard and cards component

const MemoryGame = ({ images }) => {
    const [cards, setCards] = useState(images);
    //keep track of the cards and use the image prop from app
    const [currentScore, setCurrentScore] = useState(0);
    //stores the value of the current score
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    //stores the info of the clickedcards in an empty array

    // Shuffle the cards array
    //main logic for shuffling the cards
    const shuffleCards = () => {
        const shuffledCards = [...cards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        setCards(shuffledCards);
        //sets the new order of cards each time shufflecards is called
    };

    useEffect(() => {
        shuffleCards();
    }, [clickedCards]); // Shuffle cards after each click

    // Function to handle card click
    const handleCardClick = (image) => {
        if (!clickedCards.includes(image)) {
            setClickedCards([...clickedCards, image]);
            setCurrentScore((prevScore) => prevScore + 1);
        } else {
            if (currentScore > bestScore) {
                setBestScore(currentScore);
            }
            //if the same card is clicked twice the if gets skip and the game resets with an 
            //empty setclickedcards array and score back to 0
            setCurrentScore(0);
            setClickedCards([]);
        }
    };

    // Function to reset the game
    const resetGame = () => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
        setCurrentScore(0);
        setClickedCards([]);
        shuffleCards();
    };

    return (
        <div className="memory-game">
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
            <div className="card-container">
                {cards.map((image, index) => (
                    <Card key={index} image={image} onClick={handleCardClick} />
                ))}
            </div>
            <button onClick={resetGame}>Reset Game</button>
        </div>
    );
};

export default MemoryGame;
