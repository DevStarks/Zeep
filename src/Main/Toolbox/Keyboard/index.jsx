import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Keys from './keys';


class Keyboard extends Component {
	render() {
		return (
			<div styleName='Keyboard'>
				<Keys />
			</div>
		);
	}
}


export default CSSModules(Keyboard, styles);
