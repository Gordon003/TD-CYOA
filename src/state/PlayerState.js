import createStateContext from './state';

const SET_PLAYER_EVENT = "setPlayerEvent"
const ADD_PLAYER_ACTION = "addPlayerAction"

const initialState = {
    playerName: 'Gordon',
    playerTeam: 'Screaming Gophers',
    playerHistory: [],
    playerEvent: '',
    playerRelationship:{
        "Beth": {
            relationship: 100,
        },
        "Bridgette": {
            relationship: 100,
        },
        "Cody": {
            relationship: 100,
        },
        "Courtney": {
            relationship: 100,
        },
        "DJ": {
            relationship: 100,
        },
        "Duncan": {
            relationship: 100,
        },
        "Eva": {
            relationship: 100,
        },
        "Ezekiel": {
            relationship: 100,
        },
        "Geoff": {
            relationship: 100,
        },
        "Gwen": {
            relationship: 100,
        },
        "Harold": {
            relationship: 100,
        },
        "Heather": {
            relationship: 100,
        },
        "Izzy": {
            relationship: 100,
        },
        "Katie": {
            relationship: 100,
        },
        "Leshawna": {
            relationship: 100,
        },
        "Lindsay": {
            relationship: 100,
        },
        "Noah": {
            relationship: 100,
        },
        "Owen": {
            relationship: 100,
        },
        "Sadie": {
            relationship: 100,
        },
        "Trent": {
            relationship: 100,
        },
        "Tyler": {
            relationship: 100,
        },
    }
}

const { useStateValue, StateProvider } = createStateContext(reducer, initialState);

const usePlayerState = useStateValue;
const PlayerState = StateProvider;

function reducer(state, action) {
    switch (action.type) {
        case SET_PLAYER_EVENT:
            return { ...state, playerEvent: action.payload };
        case ADD_PLAYER_ACTION:
            const newHistory = state.playerHistory.push(action.payload);
            return { ...state, playerHistory: newHistory };
        default:
            return state;
    }
};

export {
    usePlayerState,
    PlayerState,
}