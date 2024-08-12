import React, { useEffect, useState } from 'react';

function WordByWordAnimation() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const paragraph = "A passionate MERN Stack developer who works with the latest technologies.";
        const wordsArray = paragraph.split(" ");
        setWords(wordsArray);
    }, []);

    return (
        <div className="flex">
            <style>
                {`
                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }
                .word {
                    opacity: 0;
                    animation: fadeIn 0.5s forwards;
                }
                .highlight {
                    color: yellow;
                }
                .normal {
                    color: white;
                }
                `}
            </style>
            <p className="normal">
                {words.map((word, index) => (
                    <span
                        key={index}
                        className={`word mr-1 ${word === 'latest' || word === 'technologies.' ? 'highlight' : 'normal'}`}
                        style={{ animationDelay: `${index * 0.3}s` }}
                    >
                        {word}
                    </span>
                ))}
            </p>
        </div>
    );
}

export default WordByWordAnimation;
