import React, { useState, useEffect } from 'react';
import './MemoryGame.css'; // Import the CSS file

const Card = ({ image, onClick }) => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        // Reset the clicked state of cards after each shuffle
        setClicked(false);
    }, [image]);

    const handleClick = () => {
        if (!clicked) {
            setClicked(true);
            onClick(image);
        }
    };

    return (
        <div className={`card ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
            <img src={image} alt="Card" />
        </div>
    );
};

export default Card;
