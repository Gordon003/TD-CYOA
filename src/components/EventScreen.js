import React, { useEffect, useState } from 'react';

import {useGlobalState} from '../state/GlobalState';
import StartScreen from './StartScreen';

export default function EventScreen() {

    const [{ gameStarted, currentEpisodeListStory }] = useGlobalState();
    const [storyIndex, setStoryIndex] = useState(0);

    const handleClickNext = () => {
        setStoryIndex(storyIndex + 1);
    }

    useEffect(() => {
        setStoryIndex(0);
    }, [gameStarted, currentEpisodeListStory])

    let event = currentEpisodeListStory[storyIndex]

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
                        event.type === "story" && <button onClick={handleClickNext}> Next </button>
                    }

                </>
            )}

        </div>
    )

}