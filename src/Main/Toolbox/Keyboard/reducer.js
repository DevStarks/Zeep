export const types = {
  SET_OVERLAY: 'KEYBOARD/SET_OVERLAY',
}

export const initialState = {
  overlay: 'none',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OVERLAY:
      return { ...state, overlay: action.overlay }
    default:
      return state
  }
}

export const actions = {
  setOverlay: (overlay) => ({ type: types.SET_OVERLAY, overlay })
}
