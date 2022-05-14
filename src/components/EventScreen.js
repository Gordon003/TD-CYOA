import React, { useEffect, useState } from 'react';

import './screen.css';

import {SET_CURRENT_EVENT, useGlobalState} from '../state/GlobalState';
import { usePlayerState } from '../state/PlayerState';

import StartScreen from './StartScreen';
import StoryScreen from './StoryScreen';
import CharacterDialogueScreen from './CharacterDialogueScreen';

import ProfileSidebar from './ProfileSidebar';
import RelationshipSidebar from './RelationshipSidebar';

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

                <div style={{ width: '20%' }}>
                    < ProfileSidebar />
                    < RelationshipSidebar />
                </div>

                <div style={{width:'80%'}}>

                    {storyIndex !== currentEvent.story.length && !("char" in currentEvent.story[storyIndex]) &&
                        <StoryScreen
                            text={currentEvent.story[storyIndex].text}
                            handleClick={handleClickNext}
                        />
                    }

                    {storyIndex !== currentEvent.story.length && "char" in currentEvent.story[storyIndex] &&
                        <CharacterDialogueScreen
                            text={currentEvent.story[storyIndex].text}
                            handleClick={handleClickNext}
                        />
                    }

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