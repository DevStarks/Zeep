import React, { Component } from 'react';
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Tone from 'tone';

import Keys from './Keys';
import Panel from './Panel';


// Keyboard component

class Keyboard extends Component {
	render() {
		return (
			<div styleName='Keyboard'>
				<Panel overlay={this.props.overlay} />
				<Keys synth={this.props.synth} overlay={this.props.overlay} />
			</div>
		);
	}
}


// Keyboard container

const mapStateToProps = ({ overlay, synth }) => {
	return { overlay, synth }
}

export default connect(
  mapStateToProps,
  {}
)(CSSModules(Keyboard, styles))
