import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Tone from 'tone';

import Keys from './keys';


class Keyboard extends Component {
	state = {
		synth: new Tone.PolySynth().toMaster()
	}

	render() {
		return (
			<div styleName='Keyboard'>
				<Keys synth={this.state.synth} />
			</div>
		);
	}
}


export default CSSModules(Keyboard, styles);
