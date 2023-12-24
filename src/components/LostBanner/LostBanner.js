import React from "react";
import Banner from "../Banner";
import Button from "../Button";

function LostBanner({ answer, restartGame }) {
    return (
        <Banner status="sad">
            <p>
                Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
            <Button onButtonClick={restartGame}>Restart</Button>
        </Banner>
    );
}

export default LostBanner;
