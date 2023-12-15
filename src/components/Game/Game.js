import React from "react";
import UserInput from "../UserInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Keyboard from "../Keyboard";

// Pick a random word on every pageload.

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState("running");
    const [answer, setAnswer] = React.useState(()=> {
        const answer = sample(WORDS);
        console.info({ answer });
        return answer;
    })

    function restartGame() {
        const newAnswer = sample(WORDS);
        console.info({ newAnswer });
        setGameStatus("running");
        setGuesses([]);
        setAnswer(newAnswer);
    }

    function handleSetGuesses(newGuess) {
        const nextGuesses = [...guesses, newGuess];
        setGuesses(nextGuesses);
        if (newGuess.toUpperCase() === answer) {
            // nice bit of redundancy in case code changes elsewhere
            setGameStatus("won");
        } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            // can't simply change guesses bc it is stale at this point (i.e. hasn't updated yet in the state)
            setGameStatus("lost");
        }
    }

    return (
        <>
            <GuessResults guesses={guesses} answer={answer} />
            <UserInput
                handleSetGuesses={handleSetGuesses}
                gameStatus={gameStatus}
            />
            {gameStatus === "won" && (
                <WonBanner numOfGuesses={guesses.length} restartGame={restartGame}/>
            )}
            {gameStatus === "lost" && <LostBanner answer={answer} restartGame={restartGame} />}
            <Keyboard guesses={guesses} answer={answer} />
        </>
    );
}

export default Game;
