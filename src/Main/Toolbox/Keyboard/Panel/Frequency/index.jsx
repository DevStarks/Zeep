import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../Keyboard/reducer'

import Adjuster from '../components/adjuster'

class Frequency extends Component {
	render() {
		return (
			<div className='panelcontrol'>
				<label>frequency</label>

				<div>
					<Adjuster value={this.props.frequency}
										onIncrement={this.props.incrementFreq}
										onDecrement={this.props.decrementFreq} />
				</div>
			</div>
		);
	}
}

// Frequency container

const mapStateToProps = ({ keyboard: { frequency } }) => ({ frequency })

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frequency)
