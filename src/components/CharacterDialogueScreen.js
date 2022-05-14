import React from 'react';

import Button from 'react-bootstrap/Button';

import { usePlayerState } from '../state/PlayerState';

import './CharacterDialogueScreen.css';

export default function CharacterDialogueScreen(props) {

    const { text, handleClick } = props;

    const [{ playerName }] = usePlayerState();

    return (
        <div id="CharacterDialogueScreen">

            {text.map((item, index) => {

                const formattedText = item.replace('$playerName', playerName);

                return <p key={index}> {formattedText} </p>

            })}

            <Button onClick={handleClick}> Next </Button >

        </div>
    )

}