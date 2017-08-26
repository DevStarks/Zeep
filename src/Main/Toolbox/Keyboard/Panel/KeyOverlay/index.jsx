import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../../Keyboard/reducer'

import SlideSelector from './SlideSelector';

const SLIDER_OPTIONS = {
	1: 'qwerty',
	2: 'boethian',
	3: 'none'
}

class KeyOverlay extends Component {
	constructor(props) {
		super(props)

		this.onChange = this.onChange.bind(this)
	}

	onChange(arg) {
		this.props.setOverlay(SLIDER_OPTIONS[arg]);
	}

	render() {
		return (
			<div className='panelcontrol'>
				<label>overlay</label>

				<div>
					<SlideSelector options={SLIDER_OPTIONS} default={3} onChange={this.onChange} />
				</div>
			</div>
		);
	}
}


// Keyboard container

const mapStateToProps = ({ keyboard: { overlay } }) => ({ overlay })

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyOverlay)
