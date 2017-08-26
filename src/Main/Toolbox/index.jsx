import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Keyboard from './Keyboard';
import Metronome from './Metronome';


class Toolbox extends Component {
	render() {
		return (
			<div styleName='Toolbox'>
				<Metronome />
        <Keyboard />
			</div>
		);
	}
}


export default CSSModules(Toolbox, styles);
