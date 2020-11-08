import { ACTIONS } from "./MainActions"

const appState = {
    createPostTextAreaValue:{value:"",img:""}
}

export default (state = appState, { type, payload }) => {
    switch (type) {

    case ACTIONS.INPUT_CHANGE.CREATE_POST_TEXT_AREA_CHANGE:
        return { ...state, createPostTextAreaValue:{value:payload.value, img:payload.img} }

    default:
        return state
    }
}
