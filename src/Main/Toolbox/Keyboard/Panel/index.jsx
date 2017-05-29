import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Logo from './logo';
import KeyOverlay from './KeyOverlay';
import Frequency from './Frequency';

class Panel extends Component {
	render() {
		return (
			<div styleName='Panel'>
				<Logo />
				<KeyOverlay />
				<Frequency />
			</div>
		);
	}
}


export default CSSModules(Panel, styles);
