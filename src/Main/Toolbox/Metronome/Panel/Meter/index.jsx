import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../Metronome/reducer'

import Adjuster from '../../../components/adjuster'

const Meter = ({ meter, incrementMeter, decrementMeter }) => {
	return (
		<div className='panelcontrol'>
			<label>beats</label>

			<div>
				<Adjuster value={meter}
									onIncrement={incrementMeter}
									onDecrement={decrementMeter} />
			</div>
		</div>
	);
}

Meter.propTypes = {
  meter: PropTypes.number.isRequired,
  incrementMeter: PropTypes.func.isRequired,
  decrementMeter: PropTypes.func.isRequired
}

// Meter container

const mapStateToProps = ({ metronome: { meter } }) => ({ meter })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meter)
