import React from 'react';

import Button from 'react-bootstrap/Button';

import { usePlayerState } from '../state/PlayerState';
import {SET_EVENT_INDEX, useGlobalState } from '../state/GlobalState';

import './CharacterDialogueScreen.css';

const characterExpression = {
    "Chris": {
        "normal": require("../images/chris/chris_normal.png"),
    }
}

export default function CharacterDialogueScreen() {

    const [{ playerName }] = usePlayerState();
    const [{ currentEvent, currentEventIndex}, dispatchGlobal] = useGlobalState();

    const story = currentEvent.story[currentEventIndex];
    const char = story.char;
    const text = story.text;

    const handleClick = () => {
        dispatchGlobal({
            type: SET_EVENT_INDEX,
            payload: currentEventIndex + 1,
        })
    }

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

                <Button onClick={handleClick}> Next </Button >
            
            </div>

        </div>
    )

}