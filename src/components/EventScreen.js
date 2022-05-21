import React, { useEffect, useState } from 'react';

import './screen.css';

import {useGlobalState} from '../state/GlobalState';

import StartScreen from './StartScreen';
import StoryScreen from './StoryScreen';
import CharacterDialogueScreen from './CharacterDialogueScreen';
import CharacterOptionsScreen from './CharacterOptionsScreen';

import LeftSidebar from './LeftSidebar';

export default function EventScreen() {

    const [{ gameStarted, currentEvent, currentEventIndex} ] = useGlobalState();

    let currentStory = currentEvent["story"][currentEventIndex];

    let lastText = false;
    if (currentStory === undefined) {
        lastText = true;
    }

    return (
        <div id="mainScreen">
            {!gameStarted && <StartScreen/>}

            {gameStarted && (
            <div style={{display:'flex'}}>

                <div style={{ width: '20%' }}>
                    <LeftSidebar />
                </div>

                <div style={{width:'80%'}}>

                    {!lastText && !("char" in currentStory) &&
                        <StoryScreen/>
                    }

                    {!lastText  && "char" in currentStory &&
                        <CharacterDialogueScreen/>
                    }

                    {lastText && currentEvent["endType"] === "choice" &&
                        <CharacterOptionsScreen/>
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