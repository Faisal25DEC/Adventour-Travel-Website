import { WINDOW_CLICKED, NAVBAR_TYPED } from "./windowTypes"

export const setWindowClick = (payload) => {
    return {
        type: WINDOW_CLICKED, payload
    }
}

export const setNavbarTyped = () => {
    return {
        type: NAVBAR_TYPED, payload: false
    }
}