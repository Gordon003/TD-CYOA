import React from 'react';

import Button from 'react-bootstrap/Button';

import { usePlayerState } from '../state/PlayerState';
import {SET_EVENT_INDEX, useGlobalState } from '../state/GlobalState';

import './StoryScreen.css';

const log = (txt) => { console.log(txt)}

export default function StoryScreen() {

    const [{ playerName } ] = usePlayerState();
    const [{ currentEvent, currentEventIndex}, dispatchGlobal] = useGlobalState();

    const handleClick = () => {
        dispatchGlobal({
            type: SET_EVENT_INDEX,
            payload: currentEventIndex + 1,
        })
    }

    const text = currentEvent.story[currentEventIndex].text;

    return (
        <div id="StoryScreen">

            <div id = "StoryTextScreen">

                {text.map( (item, index) => {

                    const formattedText = item.replace('$playerName', playerName);

                    return <p key={index}> {formattedText} </p>
                    
                })}
                
            </div>

            <Button id="StoryButton" onClick={handleClick}> Next </Button >

        </div>
    )

}