import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Tone from 'tone';

import Keys from './Keys';
import Panel from './Panel';



class Keyboard extends Component {
	state = {
		synth: new Tone.PolySynth(6).toMaster()
	}

	render() {
		return (
			<div styleName='Keyboard'>
				<Panel />
				<Keys synth={this.state.synth} />
			</div>
		);
	}
}


export default CSSModules(Keyboard, styles);
