import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Logo from './logo';
import KeyOverlay from './KeyOverlay';
import Frequency from './Frequency';
import Transpose from './Transpose';

class Panel extends Component {
	render() {
		return (
			<div styleName='Panel'>
				<Logo />
				<KeyOverlay />
				<Frequency />
				<Transpose />
			</div>
		);
	}
}


export default CSSModules(Panel, styles);
