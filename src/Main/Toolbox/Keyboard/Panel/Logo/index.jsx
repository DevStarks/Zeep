import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';


import logo from "./images/logo.svg";

function Logo() {
	return <div styleName='Logo' dangerouslySetInnerHTML={{__html: logo}} />;
}

export default CSSModules(Logo, styles);
