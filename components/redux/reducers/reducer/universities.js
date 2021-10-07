const name = 'sidebar'

const types = {
    TOGGLE: `TOGGLE_${name}`,
    UChange: `UChange_${name}`,
    getAll:`GetAll_${name}`,
    LinkHandle:`LinkHandle_${name}`
}
const initialState = {
    open: false,
    country:"Rossiya",
    click:"asosiyLink",
    sidebar:false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.getAll: {
            return {
                ...state,
                country: "Rossiya"
            }
        }
        case types.UChange: {
            return {
                ...state, country: action.payload
            }
        }
        case types.TOGGLE: {
            return {
                ...state, sidebar:!state.sidebar
            }
        }
        case types.LinkHandle: {
            return {
                ...state, click: action.payload
            }
        }
        default:
            return {
                state
            }
    }
}
export const toggle = () => dispatch => {
    dispatch({type: types.TOGGLE});
}
export const UNChange = payload => dispatch => {
    dispatch({type: types.UChange, payload:payload});
}
export const LinkHandler = payload => dispatch => {
    dispatch({type: types.LinkHandle, payload:payload});
}
export const getAll = () => dispatch => {
    dispatch({ type: types.getAll });
}