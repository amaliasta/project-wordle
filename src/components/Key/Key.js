import React, { useEffect } from "react";
import { checkGuess } from "../../game-helpers";

function Key({ letter, guesses, answer }) {
    const getKeyClass = (letter) => {
        const lastGuess = guesses[guesses.length - 1];

        if (!lastGuess) {
            return; // no guesses
        }

        const idxInLastGuess = lastGuess.indexOf(letter);
        if (idxInLastGuess === -1) {
            // ignore, letter not found in guess
            return letterClass;
        } else if (answer.indexOf(letter) === -1) {
            // letter not found in answer
            return "incorrect";
        } else if (
            idxInLastGuess !== answer.indexOf(letter) &&
            letterClass !== "correct"
        ) {
            // letter misplaced in this guess, but rightly placed in prev guess
            return "misplaced";
        } else if (
            idxInLastGuess === answer.indexOf(letter) ||
            letterClass === "correct"
        ) {
            // letter correctly placed in this guess or prev guess
            return "correct";
        } else {
            console.log("Bug! Fix me!");
        }
    };

    const [letterClass, setLetterClass] = React.useState("");

    useEffect(() => {
        const newClass = getKeyClass(letter);
        setLetterClass(newClass);
    }, [guesses.length]);

    return <div className={`key ${letterClass}`}>{letter}</div>;
}

export default Key;
