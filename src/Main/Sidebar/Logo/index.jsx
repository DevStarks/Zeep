import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';


import logo from "./images/logo.svg";

class Logo extends Component {
	render() {

		return (
			<div styleName='Logo'>
				<div dangerouslySetInnerHTML={{__html: logo}} />
			</div>
		);
	}
}


export default CSSModules(Logo, styles);
