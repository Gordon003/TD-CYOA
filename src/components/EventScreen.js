import React, { useEffect, useState } from 'react';

import {SET_CURRENT_EVENT, useGlobalState} from '../state/GlobalState';
import { usePlayerState } from '../state/PlayerState';
import StartScreen from './StartScreen';

export default function EventScreen() {

    const [{ playerTeam } ] = usePlayerState();
    const [{ gameStarted, currentEvent, teamMembers}, dispatchGlobal ] = useGlobalState();
    const [storyIndex, setStoryIndex] = useState(0);

    const handleClickNext = () => {

        if (currentEvent.length === storyIndex + 1){
            dispatchGlobal({
                type: SET_CURRENT_EVENT,
                payload: currentEvent[storyIndex].nextEvent
            })
            setStoryIndex(0);
        } else {
            setStoryIndex(storyIndex + 1);
        }
    }

    const handleClickOption = (index) => {
        const lastEvent = currentEvent[storyIndex];
        setStoryIndex(0);
        dispatchGlobal({
            type: SET_CURRENT_EVENT,
            payload: lastEvent.optionsResult[index]
        })
        
    }

    const handleMemberSelection = (name) => {
        const memberLst = currentEvent[storyIndex]["reaction"]
        setStoryIndex(0);
        dispatchGlobal({
            type: SET_CURRENT_EVENT,
            payload: memberLst[name]
        })
    }

    useEffect(() => {
        setStoryIndex(0);
    }, [gameStarted, currentEvent])

    let event = currentEvent[storyIndex]

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
                        event.type === "choice" && 
                        event.options.map( (item, index) => {
                            return <button key={index} onClick={() => handleClickOption(index)}> {item}  </button>
                        })
                    }

{
                        event.type === "team member choice" && 
                        teamMembers[playerTeam].map( (item, index) => {
                            return <button key={index} onClick={() => handleMemberSelection(item)}> {item}  </button>
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