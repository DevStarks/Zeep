import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Keyboard from './Keyboard';


class Toolbox extends Component {
	render() {
		return (
			<div styleName='Toolbox'>
        <Keyboard />
			</div>
		);
	}
}


export default CSSModules(Toolbox, styles);
