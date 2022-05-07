import React from 'react';
import { SET_GAME_START, useGlobalState } from '../state/GlobalState';

import Button from 'react-bootstrap/Button';

export default function StartScreen() {

    const [{}, dispatchGlobal] = useGlobalState();

    const handleClick = () => {
        dispatchGlobal({
            type: SET_GAME_START,
            payload: true
        })
    }

    return (
        <div style={{width: "80%", margin:'auto'}}>
            <h1> Welcome to TD: CYOA!! </h1>

            <p> welcome to the first version of Total Drama: Create Your Own Adventure! This game will be try to be more simulation as you will participate in TDI fully.</p>

            <p> If you have any enquires/feedback, please email at <u> gordonchen0@gmail.com </u> </p>

            <Button variant="primary" onClick={handleClick}> Start Game </Button>
        </div>
    )

}