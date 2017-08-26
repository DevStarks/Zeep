import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../Keyboard/reducer'

import Adjuster from '../components/adjuster'

const CHR_SCALE = ["C", "C#", "D", "D#", "E", "F",
                   "F#", "G", "G#", "A", "A#", "B"];


const getPitchFromOffset = (offset) => {
	let idx = offset;
	while(idx < 0){ idx += CHR_SCALE.length; }
	idx %= 12;

	return CHR_SCALE[idx];
}

const Transpose = function({ pitchOffset, incrementKey, decrementKey }) {
	return (
		<div className='panelcontrol'>
			<label>transpose</label>

			<div>
				<Adjuster value={getPitchFromOffset(pitchOffset)}
									onIncrement={incrementKey}
									onDecrement={decrementKey} />
			</div>
		</div>
	);
};

// Transpose container

const mapStateToProps = ({ keyboard: { pitchOffset } }) => ({ pitchOffset })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transpose)
