import Tone from 'tone';

export const types = {
  SET_OVERLAY: 'KEYBOARD/SET_OVERLAY',
  INCREMENT_FREQ: 'KEYBOARD/INCREMENT_FREQ',
  DECREMENT_FREQ: 'KEYBOARD/DECREMENT_FREQ',
}

export const initialState = {
  overlay: 'none',
  frequency: 440,
  synth: new Tone.PolySynth(6).toMaster()
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_OVERLAY:
      return { ...state, overlay: action.overlay }
    case types.INCREMENT_FREQ:
      state.synth.voices.forEach(voice => voice.frequency.value += 1)
      return { ...state, frequency: state.frequency + 1 }
    case types.DECREMENT_FREQ:
      state.synth.voices.forEach(voice => voice.frequency.value -= 1)
      return { ...state, frequency:  state.frequency - 1 }
    default:
      return state
  }
}

export const actions = {
  setOverlay: (overlay) => ({ type: types.SET_OVERLAY, overlay }),
  incrementFreq: () => ({ type: types.INCREMENT_FREQ }),
  decrementFreq: () => ({ type: types.DECREMENT_FREQ })
}
