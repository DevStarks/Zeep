import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Logo from './logo';
import KeyOverlay from './KeyOverlay';

class Panel extends Component {
	render() {
		return (
			<div styleName='Panel'>
				<Logo />
				<KeyOverlay />
			</div>
		);
	}
}


export default CSSModules(Panel, styles);
