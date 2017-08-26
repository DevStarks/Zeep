import Tone from 'tone';

const types = {
  INCREMENT_METER: 'METRONOME/INCREMENT_METER',
  DECREMENT_METER: 'METRONOME/DECREMENT_METER'
}

const initialState = {
  meter: 4,
  transport: Tone.Transport
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_METER:
      return { ...state, meter: state.meter + 1 }

    case types.DECREMENT_METER:
      return { ...state, meter:  state.meter - 1 }

    default:
      return state;
  }
}

export const actions = {
  incrementMeter: () => ({ type: types.INCREMENT_METER }),
  decrementMeter: () => ({ type: types.DECREMENT_METER })
}
