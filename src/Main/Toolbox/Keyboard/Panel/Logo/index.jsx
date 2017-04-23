import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';


import logo from "./images/logo.svg";

function Logo() {
	return (
		<div styleName='Logo'>
			<div dangerouslySetInnerHTML={{__html: logo}} />
		</div>
	);
}

export default CSSModules(Logo, styles);
