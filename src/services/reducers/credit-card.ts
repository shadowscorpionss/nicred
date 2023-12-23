import update from 'react-addons-update';
import { ADD_CREDIT_CARD, REMOVE_CREDIT_CARD, TCreditCardActions, UPDATE_CREDIT_CARD } from "../actions/credit-card";


const inititialState: ICreditCardStorage = {
    cards: []
}


export const creditCardReducer = (state = inititialState, action: TCreditCardActions) => {
    switch (action.type) {
        case ADD_CREDIT_CARD:
            return { ...state, cards: [...state.cards, action.payload] };
        case REMOVE_CREDIT_CARD:
            const id = action.payload;
            return { ...state, cards: state.cards.filter(e => e.id !== id) };
        case UPDATE_CREDIT_CARD:
            if (action.payload.id !== action.payload.obj.id){
                return state;
            }
            return update(state, {
                cards: {
                    [action.payload.id]: {
                        $set: action.payload.obj
                    }
                }
            })
        default:
            return state;
    }
}