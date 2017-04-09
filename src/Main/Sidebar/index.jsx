import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Logo from './Logo';


class Sidebar extends Component {
	render() {
		return (
			<aside styleName='Sidebar'>
				<Logo />
			</aside>
		);
	}
}


export default CSSModules(Sidebar, styles);
