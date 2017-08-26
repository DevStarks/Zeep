import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../Metronome/reducer'

import Adjuster from '../../../components/adjuster'

const Tempo = ({ tempo, incrementTempo, decrementTempo }) => {
	return (
		<div className='panelcontrol'>
			<label>tempo</label>

			<div>
				<Adjuster value={tempo}
									onIncrement={incrementTempo}
									onDecrement={decrementTempo} />
			</div>
		</div>
	);
}

Tempo.propTypes = {
  tempo: PropTypes.number.isRequired,
  incrementTempo: PropTypes.func.isRequired,
  decrementTempo: PropTypes.func.isRequired
}

// Tempo container

const mapStateToProps = ({ metronome: { tempo } }) => ({ tempo })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tempo)
