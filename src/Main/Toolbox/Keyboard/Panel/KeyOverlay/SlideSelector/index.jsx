import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import $ from 'jquery';
import 'jquery-ui-bundle';

import _ from 'lodash';

class SlideSelector extends Component {
	constructor(props) {
		super(props);

		this.renderOptions = this.renderOptions.bind(this);
		this.renderOption = this.renderOption.bind(this);
		this.optionClass = this.optionClass.bind(this);
		this.optionClass = this.optionClass.bind(this);
		this.onDrag = this.onDrag.bind(this);
		this.onDragStop = this.onDragStop.bind(this);

		this.state = {
			selected: this.props.default || 1
		}
	}

	componentDidMount() {
		this.initDraggable.call(this);
	}

	initDraggable() {
		var $element = $(this.sliderBall);

		$element.draggable({
			axis: "y",
			containment: "parent",
			stop: this.onDragStop
		})
	}

	onDragStop(event, { position: { left, top } }) {
		//
		// use this.slider.offsetTop to get difference in offset between
		// slider options and sliderBall
		//
		const $sliderBall = $(event.target);
		const $closest = $(this.getClosestOption(left, top + this.slider.offsetTop))
		const closestY = $closest.position().top - this.slider.offsetTop;

  	$sliderBall.stop().animate({
      top: closestY
  	}, 500,'easeOutCirc');
	}

	getClosestOption(x, y) {
		const locations = this.getOptionLocations();
		let closestIdx = 0;

		locations.forEach((location, idx) => {
			const diff = Math.abs(location - y);
			const closestOptionDiff = Math.abs(locations[closestIdx] - y);

			if(diff < closestOptionDiff){
				closestIdx = idx;
			}
		})

		return this['option' + closestIdx];
	}

	getOptionLocations() {
		const optionsCount = Object.keys(this.props.options).length;

		// returns the y offsets of all options
		return _.times(optionsCount, i => this['option' + i].offsetTop);
	}

	onDrag(el, x, y) {
		const selected = this.getClosestOption(x, y);

		this.props.onChange(selected);

		this.setState({
			selected: selected
		})
	}

	optionClass(optionId) {
		return this.state.selected === optionId ? 'selected' : '';
	}

	renderOption(optionId, idx) {
		return (
			<li className={'slide-option ' + this.optionClass(optionId)}
					key={idx}
					ref={ option => { this['option' + idx] = option }}>
				{this.props.options[optionId]}
			</li>
		);
	}

	renderOptions() {
		return Object.keys(this.props.options).map(this.renderOption);
	}

	render() {
		return (
			<div className='slideselector' styleName='SlideSelector'>
				<div className='slider' ref={ slider => { this.slider = slider }}>
					<div className='sliderBall' ref={ sliderBall => { this.sliderBall = sliderBall }}/>
				</div>

				<ul>
					{this.renderOptions()}
				</ul>
			</div>
		);
	}
}

SlideSelector.propTypes = {
	options: React.PropTypes.object.isRequired,
	onChange: React.PropTypes.func.isRequired,
	default: React.PropTypes.number
}


export default CSSModules(SlideSelector, styles);
