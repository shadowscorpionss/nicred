import { ADD_CREDIT_CARD, REMOVE_CREDIT_CARD } from "../actions/credit-card";


const inititialState = {
    cards: null,
    payments: null,
    isLoading: false,
    hasErrors: false,
    error: null
}


export const creditCardReducer = (state = inititialState, action) => {
    switch (action.type) {
        case ADD_CREDIT_CARD:
            const { item } = action;
            return { ...state, cards: [...cards, item] };
        case REMOVE_CREDIT_CARD:
            const { id } = action;
            return { ...state, cards: cards.filter(e => e.id !== id) };
        default:
            return state;
    }
}