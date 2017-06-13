import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../Keyboard/reducer'

import Adjuster from '../components/adjuster'

const Transpose = function({ transposition, incrementKey, decrementKey }) {
	return (
		<div className='panelcontrol'>
			<label>transpose</label>

			<div>
				<Adjuster value={transposition}
									onIncrement={incrementKey}
									onDecrement={decrementKey} />
			</div>
		</div>
	);
};

// Transpose container

const mapStateToProps = ({ transposition }) => ({ transposition })

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transpose)
