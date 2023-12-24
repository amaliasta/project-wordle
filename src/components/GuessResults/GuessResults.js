import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
    const guessNums = range(0, NUM_OF_GUESSES_ALLOWED);

    return guessNums.map((num) => {
        return <Guess key={num} value={guesses[num]} answer={answer} />;
    });
}

export default GuessResults;
