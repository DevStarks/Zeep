import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules';
import { actions } from '../../../Keyboard/reducer'
import styles from './styles.scss';

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
			<div styleName='KeyOverlay'>
				<label>overlay</label>

				<SlideSelector options={SLIDER_OPTIONS} default={3} onChange={this.onChange} />
			</div>
		);
	}
}


// Keyboard container

const mapStateToProps = ({ overlay }) => {
	return { overlay }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CSSModules(KeyOverlay, styles))
