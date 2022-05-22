import React from 'react';

import Button from 'react-bootstrap/Button';

import {SET_CURRENT_EVENT, SET_EVENT_INDEX, useGlobalState} from '../state/GlobalState';
import { usePlayerState } from '../state/PlayerState';

import './CharacterOptionsScreen.css';

export default function CharacterOptionsScreen() {

    const [{ playerName }] = usePlayerState();
    const [{ currentEvent }, dispatchGlobal] = useGlobalState();

    const options = currentEvent.options;

    // select option
    const handleClick = (nextEvent) => {
        dispatchGlobal({
            type: SET_CURRENT_EVENT,
            payload: nextEvent
        }) 
    }

    return (
        <div id="CharacterOptionsScreen">

                {options.map( (item, index) => {
                    return <Button id={index} className="OptionBut" style={{margin: '25px'}} key={index} onClick={() => handleClick(item.nextEvent)}> {item.text.replace('$playerName', playerName)}  </Button>
                })}

        </div>
    )

}