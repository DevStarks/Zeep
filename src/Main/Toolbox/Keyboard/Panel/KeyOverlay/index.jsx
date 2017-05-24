import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import SlideSelector from './SlideSelector';

class KeyOverlay extends Component {
	sliderOptions() {
		return {
			1: 'qwerty',
			2: 'boethian',
			3: 'none'
		}
	}

	onChange() {
		
	}

	render() {
		return (
			<div styleName='KeyOverlay'>
				<label>overlay</label>

				<SlideSelector options={this.sliderOptions()} default={3} onChange={this.onChange} />
			</div>
		);
	}
}


export default CSSModules(KeyOverlay, styles);
