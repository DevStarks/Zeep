import Tone from 'tone';

export const types = {
  SET_OVERLAY: 'KEYBOARD/SET_OVERLAY',
  INCREMENT_FREQ: 'KEYBOARD/INCREMENT_FREQ',
  DECREMENT_FREQ: 'KEYBOARD/DECREMENT_FREQ',
  DECREMENT_KEY: 'KEYBOARD/DECREMENT_KEY',
  INCREMENT_KEY: 'KEYBOARD/INCREMENT_KEY',
}

const pitchShift = new Tone.PitchShift().toMaster();

export const initialState = {
  overlay: 'none',
  frequency: 440,
  pitchOffset: pitchShift.pitch,
  synth: new Tone.PolySynth(6).connect(pitchShift),
  pitchShift
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

    case types.INCREMENT_KEY:
      pitchShift.pitch += 1;
      return { ...state, pitchOffset: state.pitchOffset + 1 }

    case types.DECREMENT_KEY:
      pitchShift.pitch -= 1;
      return { ...state, pitchOffset:  state.pitchOffset - 1 }

    default:
      return state
  }
}

export const actions = {
  setOverlay: (overlay) => ({ type: types.SET_OVERLAY, overlay }),
  incrementFreq:     () => ({ type: types.INCREMENT_FREQ }),
  decrementFreq:     () => ({ type: types.DECREMENT_FREQ }),
  incrementKey:      () => ({ type: types.INCREMENT_KEY }),
  decrementKey:      () => ({ type: types.DECREMENT_KEY })
}
