import React from "react";
import Banner from "../Banner";
import Button from "../Button";

function WonBanner({ numOfGuesses, restartGame }) {
    return (
        <Banner status="happy">
            <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>
                    {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
                </strong>
                .
            </p>
            <Button onButtonClick={restartGame}>Restart</Button>
        </Banner>
    );
}

export default WonBanner;
