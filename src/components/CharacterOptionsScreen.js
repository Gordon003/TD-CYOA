import React from 'react';

import Button from 'react-bootstrap/Button';

import { usePlayerState } from '../state/PlayerState';

export default function CharacterOptionsScreen(props) {

    const { options, handleClick } = props;

    const [{ playerName }] = usePlayerState();

    console.log("here")

    return (
        <div>

            {options.map( (item, index) => {
                return <Button id={index} style={{margin: '25px'}} key={index} onClick={() => handleClick(item.nextEvent)}> {item.text.replace('$playerName', playerName)}  </Button>
            })}

        </div>
    )

}