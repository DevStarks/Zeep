import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';


class Logo extends Component {
	render() {
		return (
			<div styleName='Logo'>
				<img src='./images/logo.svg' alt='logo'></img>
			</div>
		);
	}
}


export default CSSModules(Logo, styles);
