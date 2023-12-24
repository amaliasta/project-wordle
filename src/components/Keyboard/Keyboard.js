import React from "react";
import Key from "../Key";
import { QWERTY } from "../../data";

function Keyboard({ guesses, answer }) {

    return (
        <div className="keyboard-wrapper">
            {QWERTY.map((letter) => {
                return (
                    <Key
                        letter={letter}
                        key={letter}
                        guesses={guesses}
                        answer={answer}></Key>
                );
            })}
        </div>
    );
}

export default Keyboard;
