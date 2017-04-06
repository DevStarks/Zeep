import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Logo from './Logo';


class Sidebar extends Component {
	render() {
		return (
			<div styleName='Sidebar'>
				<Logo />
			</div>
		);
	}
}


export default CSSModules(Sidebar, styles);
