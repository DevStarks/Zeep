import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Tone from 'tone';

import Keys from './keys';
import Logo from './logo';


class Keyboard extends Component {
	state = {
		synth: new Tone.PolySynth(6).toMaster()
	}

	render() {
		return (
			<div styleName='Keyboard'>
				<div className='keyboard-panel'>
					<Logo />
				</div>
				<Keys synth={this.state.synth} />
			</div>
		);
	}
}


export default CSSModules(Keyboard, styles);
