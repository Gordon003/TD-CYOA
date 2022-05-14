import React from 'react';

import Button from 'react-bootstrap/Button';

import { usePlayerState } from '../state/PlayerState';

import './StoryScreen.css';

export default function StoryScreen(props) {

    const {text, handleClick} = props;

    const [{ playerName } ] = usePlayerState();

    return (
        <div id="StoryScreen">

            {text.map( (item, index) => {

                const formattedText = item.replace('$playerName', playerName);

                return <p key={index}> {formattedText} </p>
                
            })}

            <Button onClick={handleClick}> Next </Button >

        </div>
    )

}