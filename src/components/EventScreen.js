import React, { useEffect, useState } from 'react';

import {useGlobalState} from '../state/GlobalState';
import StartScreen from './StartScreen';

export default function EventScreen() {

    const [{ gameStarted, currentStoryList }, dispatchGlobal] = useGlobalState();
    const [storyIndex, setStoryIndex] = useState(0);

    const handleClickNext = () => {
        setStoryIndex(storyIndex + 1);
    }

    useEffect(() => {
        setStoryIndex(0);
    }, [gameStarted, currentStoryList])

    let event = currentStoryList[storyIndex]

    return (
        <div>
            {!gameStarted && <StartScreen/>}

            {gameStarted && (
                <>
                    <p> Testing </p>
                    <h1> {event.header} </h1>

                    {
                        event.text.map( (item, index) => {
                            return <p key={index}> {item} </p>
                        })
                    }

                    {
                        event.type === "dialogue" && <button onClick={handleClickNext}> Next </button>
                    }

                </>
            )}

        </div>
    )

}