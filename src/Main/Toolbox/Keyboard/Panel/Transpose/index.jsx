import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../Keyboard/reducer'

import Adjuster from '../components/adjuster'

class Transpose extends Component {
	render() {
		return (
			<div className='panelcontrol'>
				<label>transpose</label>

				<div>
					<Adjuster value={this.props.key}
										onIncrement={this.props.incrementKey}
										onDecrement={this.props.decrementKey} />
				</div>
			</div>
		);
	}
}

// Transpose container

const mapStateToProps = ({ key }) => {
	return { key }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transpose)
