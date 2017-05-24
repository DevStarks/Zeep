import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Tone from 'tone';

import Keys from './Keys';
import Panel from './Panel';

const DEFAULT_OVERLAY = 'qwerty';

class Keyboard extends Component {
	state = {
		synth: new Tone.PolySynth(6).toMaster(),
		overlay: DEFAULT_OVERLAY
	}

	render() {
		return (
			<div styleName='Keyboard'>
				<Panel overlay={this.state.overlay} />
				<Keys synth={this.state.synth} overlay={this.state.overlay} />
			</div>
		);
	}
}


export default CSSModules(Keyboard, styles);
