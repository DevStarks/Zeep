import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Sidebar from './Sidebar';


class Main extends Component {
	render() {
		return (
			<div styleName='Main'>
        <Sidebar />
			</div>
		);
	}
}


export default CSSModules(Main, styles);
