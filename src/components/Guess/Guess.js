import React from "react";
import { checkGuess } from "../../game-helpers.js";
import { range } from "../../utils";

function Cell({ letter, status }) {
    const letterClasses = letter ? `cell ${status}` : "cell";

    return <span className={letterClasses}>{letter}</span>;
}

function Guess({ value, answer }) {
    const guessResults = checkGuess(value, answer);

    return (
        <div className="guess-results">
            <p className="guess">
                {range(5).map((num) => (
                    <Cell
                        key={num}
                        letter={
                            guessResults ? guessResults[num].letter : undefined
                        }
                        status={
                            guessResults ? guessResults[num].status : undefined
                        }
                    />
                ))}
            </p>
        </div>
    );
}

export default Guess;
