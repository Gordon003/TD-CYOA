import React, { useEffect, useState } from 'react';

import {SET_CURRENT_EVENT, useGlobalState} from '../state/GlobalState';
import { usePlayerState } from '../state/PlayerState';
import StartScreen from './StartScreen';

export default function EventScreen() {

    const [{ playerTeam } ] = usePlayerState();
    const [{ gameStarted, currentEvent, teamMembers}, dispatchGlobal ] = useGlobalState();
    const [storyIndex, setStoryIndex] = useState(0);

    // Click to go next text
    const handleClickNext = () => {
        if (storyIndex === currentEvent.story.length - 1) {
            setStoryIndex(0);
            dispatchGlobal({
                type: SET_CURRENT_EVENT,
                payload: currentEvent.nextEvent
            })
        } else {
            setStoryIndex(storyIndex + 1);
        }
    }

    // select option
    const handleClickOption = (nextEvent) => {
        setStoryIndex(0);
        dispatchGlobal({
            type: SET_CURRENT_EVENT,
            payload: nextEvent
        })
        
    }

    // select team member
    const handleMemberSelection = (name) => {
        const memberLst = currentEvent[storyIndex]["reaction"]
        setStoryIndex(0);
        dispatchGlobal({
            type: SET_CURRENT_EVENT,
            payload: memberLst[name]
        })
    }

    // new story
    useEffect(() => {
        setStoryIndex(0);
    }, [gameStarted, currentEvent])

    let LASTTEXT = false;
    if (Object.keys(currentEvent).length !== 0) {
        LASTTEXT = (storyIndex === currentEvent.story.length - 1)
    }


    return (
        <div>
            {!gameStarted && <StartScreen/>}

            {gameStarted && (
                <>

                    {/* Event Header */}
                    <h1> {currentEvent.title} </h1>

                    {/* Event text */}
                    {
                        currentEvent.story[storyIndex].text.map( (item, index) => {
                            return <p key={index}> {item} </p>
                        })
                    }

                    {/* Go to next text option */}
                    {
                        (!LASTTEXT || (LASTTEXT && currentEvent.endType === "nextEvent")) &&
                        <button onClick={handleClickNext}> Next </button>
                    }

                    {/* check last event */}
                    {
                        LASTTEXT &&
                        currentEvent.endType === "choice" &&
                        currentEvent.options.map( (item, index) => {
                            return <button key={index} onClick={() => handleClickOption(item.nextEvent)}> {item.text}  </button>
                        })
                    }

                    {console.log(teamMembers)}

                    {/* team interaction option */}
                    {
                        LASTTEXT &&
                        currentEvent.endType === "teamInteraction" &&
                        teamMembers[playerTeam].map( (item, index) => {
                            return <button key={index} onClick={() => handleMemberSelection(item)}> {item}  </button>
                        })
                    }

                </>
            )}

        </div>
    )

}