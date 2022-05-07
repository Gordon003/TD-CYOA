import React, { useEffect, useState } from 'react';

import './screen.css';

import {SET_CURRENT_EVENT, useGlobalState} from '../state/GlobalState';
import { usePlayerState } from '../state/PlayerState';
import StartScreen from './StartScreen';
import RelationshipSidebar from './RelationshipSidebar';

import Button from 'react-bootstrap/Button';

export default function EventScreen() {

    const [{ playerName, playerTeam } ] = usePlayerState();
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
        <div id="mainScreen">
            {!gameStarted && <StartScreen/>}

            {gameStarted && (
                <div style={{display:'flex'}}>
                    <div style={{width:'80%'}}>
                            {/* Event Header */}
                            <h1> {currentEvent.title} </h1>

                            {/* Event text */}
                            {
                                currentEvent.story[storyIndex].text.map( (item, index) => {
                                    return <p key={index}> {item.replace('$playerName', playerName)} </p>
                                })
                            }

                            {/* Go to next text option */}
                            {
                                (!LASTTEXT || (LASTTEXT && currentEvent.endType === "nextEvent")) &&
                                <Button onClick={handleClickNext}> Next </Button >
                            }

                            {/* check last event */}
                            {
                                LASTTEXT &&
                                currentEvent.endType === "choice" &&
                                currentEvent.options.map( (item, index) => {
                                    return <Button style={{margin: '25px'}} key={index} onClick={() => handleClickOption(item.nextEvent)}> {item.text.replace('$playerName', playerName)}  </Button>
                                })
                            }

                            {/* team interaction option */}
                            {
                                LASTTEXT &&
                                currentEvent.endType === "teamInteraction" &&
                                teamMembers[playerTeam].map( (item, index) => {
                                    return <Button key={index} style={{ margin: '5px' }} onClick={() => handleMemberSelection(item)}> {item}  </Button>
                                })
                            }

                    </div>

                    <div style={{ width: '20%' }}>
                        < RelationshipSidebar />
                    </div>
                    
                </div>
            )}

        </div>
    )

}

// return <Button key={index} style={{padding:'10px'}} onClick={() => handleMemberSelection(item)}> {item}  </Button>

{/* <div>
    <Button key={index} style={{ marginRight: '10px' }} onClick={() => handleClickOption(item.nextEvent)}> {item.text}  </Button>
    <div class="divider" />
</div> */}