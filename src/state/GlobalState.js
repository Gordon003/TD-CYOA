import createStateContext from './state';

import { fullEpisodesList } from '../utils/Story';

const SET_EVENT = "setEvent";
const SET_GAME_START = "setGameStart";
const SET_GAME_EPISODE = "setGameEpisode";

const initialState = {

    gameStarted: false,

    currentEpisode: 0,
    currentEpisodeListStory: [],

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
            return { ...state, gameStarted: true, currentEpisode: 1, currentEpisodeListStory: fullEpisodesList[1]}
        case SET_EVENT:
            return { ...state, currentEvent: action.payload };
        case SET_GAME_EPISODE:
            const num = action.payload;
            return { ...state, currentEpisode: num, currentEpisodeListStory: fullEpisodesList[num]};
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