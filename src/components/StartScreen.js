import React from 'react';
import { SET_GAME_START, useGlobalState } from '../state/GlobalState';

export default function StartScreen() {

    const [{}, dispatchGlobal] = useGlobalState();

    const handleClick = () => {
        dispatchGlobal({
            type: SET_GAME_START,
            payload: true
        })
    }

    return (
        <>
            <h1> Welcome to TD CYOA!! </h1>

            <p> In this game, you get to be the contestant blah blah blah. Click to start the game!</p>

            <button onClick={handleClick}> Start Game </button>
        </>
    )

}