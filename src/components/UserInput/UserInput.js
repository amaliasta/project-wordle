import React from "react";

function UserInput({ handleSetGuesses, gameStatus }) {
    const [tentativeGuess, setTentativeGuess] = React.useState("");

    function changeHandler(e) {
        const input = e.target.value.toUpperCase();
        setTentativeGuess(input);
    }

    function submitHandler(e) {
        e.preventDefault();
        handleSetGuesses(tentativeGuess);
        setTentativeGuess("");
    }

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="guess-input">Enter guess:</label>

            <input
                id="guess-input"
                type="text"
                value={tentativeGuess}
                pattern="[a-zA-Z]{5,5}"
                title="5 letters"
                onChange={changeHandler}
                disabled={gameStatus !== 'running'}
                required></input>
        </form>
    );
}

export default UserInput;
