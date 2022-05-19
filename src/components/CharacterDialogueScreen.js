import React from 'react';

import Button from 'react-bootstrap/Button';

import { usePlayerState } from '../state/PlayerState';

import './CharacterDialogueScreen.css';

import chris from '../images/chris/chris_normal.png'

const characterExpression = {
    "Chris": {
        "normal": require("../images/chris/chris_normal.png"),
    }
}

export default function CharacterDialogueScreen(props) {

    const { currentStory, handleClick } = props;

    const { char, text } = currentStory;

    const [{ playerName }] = usePlayerState();

    return (
        <div id="CharacterDialogueScreen">

            <div id="CharScreen">

                {char.map((ch, index) => {

                    return <img width={250} key={index} src={characterExpression[ch]["normal"]} />

                })}

            </div>

            <div id="TextScreen">

                {text.map((item, index) => {

                    const formattedText = item.replace('$playerName', playerName);

                    return <p key={index}> {formattedText} </p>

                })}
            
            </div>

            <Button onClick={handleClick}> Next </Button >

        </div>
    )

}