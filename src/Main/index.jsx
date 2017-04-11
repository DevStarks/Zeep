import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Sidebar from './Sidebar';
import Toolbox from './Toolbox';


class Main extends Component {
	render() {
		return (
			<div styleName='Main'>
        <Sidebar />
				<Toolbox />
			</div>
		);
	}
}


export default CSSModules(Main, styles);
