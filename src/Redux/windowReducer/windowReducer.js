import { NAVBAR_TYPED, WINDOW_CLICKED } from "./windowTypes";

const initialState = true;

export const windowReducer = (state, {type, payload}) => {
    switch (type) {
        case WINDOW_CLICKED: {
            return true
        }
        case NAVBAR_TYPED: {
            return false
        }
        default:
            return true;
    }
}