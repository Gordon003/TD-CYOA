import createStateContext from './state';

import { fullEpisodesList } from '../utils/Story';

const SET_GAME_START = "setGameStart";
const SET_GAME_EPISODE = "setGameEpisode";
const SET_CURRENT_EVENT = "setCurrentEvent";

const initialState = {

    gameStarted: false,

    currentEpisode: 0,
    currentEvent: {},
    currentEventType: "start",

    currentStoryList: [],
    optionsList: [],

    teamList: [
        'Killer Bass',
        'Screaming Gophers'
    ],
    teamMembers: {
        'Killer Bass' : [
            "Bridgette",
            "Courtney",
            "DJ",
            "Duncan",
            "Eva",
            "Ezekiel",
            "Geoff",
            "Harold",
            "Katie",
            "Sadie",
            "Tyler"
        ],
        'Screaming Gophers': [
            "Beth",
            "Cody",
            "Gwen",
            "Heather",
            "Justin",
            "Izzy",
            "Leshawna",
            "Lindsay",
            "Noah",
            "Owen",
            "Trent"
        ]
    }
}

const { useStateValue, StateProvider } = createStateContext(reducer, initialState);

const useGlobalState = useStateValue;
const GlobalState = StateProvider;

function reducer(state, action) {
    switch (action.type) {
        case SET_GAME_START:
            return { ...state, gameStarted: true, currentEpisode: 1, currentEvent: fullEpisodesList[1]}
        case SET_CURRENT_EVENT:
            return { ...state, currentEvent: action.payload}
        case SET_GAME_EPISODE:
            const num = action.payload;
            return { ...state, currentEpisode: num, currentEvent: fullEpisodesList[num]};
        default:
            return state;
    }
};

export {
    useGlobalState,
    GlobalState,
    SET_GAME_START,
    SET_CURRENT_EVENT
}