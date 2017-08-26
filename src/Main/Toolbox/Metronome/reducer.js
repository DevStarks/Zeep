import Tone from 'tone';

const types = {
  INCREMENT_METER: 'METRONOME/INCREMENT_METER',
  DECREMENT_METER: 'METRONOME/DECREMENT_METER',
  INCREMENT_TEMPO: 'METRONOME/INCREMENT_TEMPO',
  DECREMENT_TEMPO: 'METRONOME/DECREMENT_TEMPO'
}

const initialState = {
  meter: 4,
  tempo: 120,
  transport: Tone.Transport
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_METER:
      state.transport.timeSignature = state.meter + 1
      return { ...state, meter: state.meter + 1 }

    case types.DECREMENT_METER:
      state.transport.timeSignature = state.meter - 1
      return { ...state, meter: state.meter - 1 }

    case types.INCREMENT_TEMPO:
      state.transport.bpm.value = state.tempo + 1
      return { ...state, tempo: state.tempo + 1 }

    case types.DECREMENT_TEMPO:
      state.transport.bpm.value = state.tempo - 1
      return { ...state, tempo: state.tempo - 1 }

    default:
      return state;
  }
}

export const actions = {
  incrementMeter: () => ({ type: types.INCREMENT_METER }),
  decrementMeter: () => ({ type: types.DECREMENT_METER }),
  incrementTempo: () => ({ type: types.INCREMENT_TEMPO }),
  decrementTempo: () => ({ type: types.DECREMENT_TEMPO })
}
