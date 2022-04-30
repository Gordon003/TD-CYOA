import createStateContext from './state';

const SET_PLAYER_EVENT = "setPlayerEvent"

const initialState = {
    playerHistory: [],
    playerEvent: '',
}

const { useStateValue, StateProvider } = createStateContext(reducer, initialState);

const usePlayerState = useStateValue;
const PlayerState = StateProvider;

function reducer(state, action) {
    switch (action.type) {
        case SET_PLAYER_EVENT:
            return { ...state, playerEvent: action.payload };
        default:
            return state;
    }
};

export {
    usePlayerState,
    PlayerState,
    SET_PLAYER_EVENT
}