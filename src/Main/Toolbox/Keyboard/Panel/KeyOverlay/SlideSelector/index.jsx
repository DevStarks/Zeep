import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Draggable from 'draggable';

class SlideSelector extends Component {
	constructor(props) {
		super(props);

		this.renderOptions = this.renderOptions.bind(this);
		this.renderOption = this.renderOption.bind(this);
		this.optionClass = this.optionClass.bind(this);
	}

	initDraggable() {
		var element = this.refs.sliderBall;
		var options = {
			limit: this.refs.slider,
			onDrag: this.onDrag
		};

		new Draggable (element, options);
	}

	onDrag(x, y) {
		
	}

	optionClass(optionId) {
		return this.props.selected === optionId ? 'selected' : '';
	}

	renderOption(optionId) {
		return (
			<li className={this.optionClass(optionId)}>
				{this.props.options[optionId]}
			</li>
		);
	}

	renderOptions() {
		return Object.keys(this.props.options).map(this.renderOption);
	}

	render() {
		return (
			<div styleName='SlideSelector'>
				<div className='slider' ref={ slider => { this.slider = slider }}>
					<div className='sliderBall' ref={ sliderBall => { this.sliderBall = sliderBall }}/>
				</div>

				{this.renderOptions()}
			</div>
		);
	}
}


export default CSSModules(SlideSelector, styles);
