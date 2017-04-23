import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import SlideSelector from './SlideSelector';

class KeyOverlay extends Component {
	formatSliderOptions() {
		
	}

	render() {
		return (
			<div styleName='KeyOverlay'>
				<label>overlay</label>
				<div>
					<SlideSelector options={this.formatSliderOptions()}/>

					<ul>
						<li>boethian</li>
						<li>qwerty</li>
						<li>none</li>
					</ul>
				</div>
			</div>
		);
	}
}


export default CSSModules(KeyOverlay, styles);
