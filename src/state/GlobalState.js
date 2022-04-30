import createStateContext from './state';

import { startStoryEventList } from '../utils/Story';

const SET_EVENT = "setEvent"
const SET_GAME_START = "SetGameStart"

const initialState = {
    gameStarted: false,
    currentEvent: '',
    currentEventType: "start",
    currentStoryList: [],
    optionsList: [],
}

const { useStateValue, StateProvider } = createStateContext(reducer, initialState);

const useGlobalState = useStateValue;
const GlobalState = StateProvider;

function reducer(state, action) {
    switch (action.type) {
        case SET_GAME_START:
            // console.log("stat", SET_GAME_START)
            // console.log("startStoryEventList", startStoryEventList)
            return { ...state, gameStarted: action.payload, currentStoryList: startStoryEventList}
        case SET_EVENT:
            return { ...state, currentEvent: action.payload };
        default:
            return state;
    }
};

export {
    useGlobalState,
    GlobalState,
    SET_EVENT,
    SET_GAME_START,
}