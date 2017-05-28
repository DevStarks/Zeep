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
		this.selectClosestOption = this.selectClosestOption.bind(this);
		this.snapToClosest = this.snapToClosest.bind(this);

		this.state = {
			selected: this.props.default || 1
		}
	}

	componentDidMount() {
		this.initDraggable.call(this);
	}

	initDraggable() {
		$(this.sliderBall).draggable({
			axis: "y",
			containment: "parent",
			stop: this.snapToClosest,
			drag: this.selectClosestOption
		})

		this.setDefaultPosition()
	}

	snapToClosest(event, { position: { left, top } }) {
		const $closest = $(this.getClosestOption(left, top));
		this.snapToOption($closest);
	}

	setDefaultPosition() {
		const $defaultOption = $(this['option' + this.props.default]);
		this.snapToOption($defaultOption);
	}

	snapToOption($option){
		//
		// use this.slider.offsetTop to get difference in offset between
		// slider options and sliderBall
		//
		const y = $option.position().top - this.slider.offsetTop;
		const $sliderBall = $(this.sliderBall);

  	$sliderBall.stop().animate({
      top: y
  	}, 500,'easeOutCirc');
	}

	getClosestOption(x, y) {
		const locations = this.getOptionLocations();
		let closestOptId = null;

		Object.keys(locations).forEach( optionId => {
			const location = locations[optionId];
			const diff = Math.abs(location - y);
			const closestOptionDiff = Math.abs(locations[closestOptId] - y);

			y += this.slider.offsetTop;

			if (diff < closestOptionDiff || !closestOptId){
				closestOptId = optionId;
			}
		})

		return this['option' + closestOptId];
	}

	getOptionLocations() {
		const locations = {}
		// location object maps y offset of option to the option id

		Object.keys(this.props.options).forEach((optionId) => {
			const location =  this['option' + optionId].offsetTop
			locations[optionId] = location
		})

		return locations;
	}

	selectClosestOption(event, { position: { left, top } }) {
		const closestOption = this.getClosestOption(left, top);
		const selected = closestOption.dataset.id;

		this.props.onChange(selected);

		this.setState({
			selected: selected
		})
	}

	optionClass(optionId) {
		return this.state.selected === optionId ? 'selected' : '';
	}

	renderOption(optionId) {
		return (
			<li className={'slide-option ' + this.optionClass(optionId)}
					key={optionId}
					data-id={optionId}
					ref={ option => { this['option' + optionId] = option }}>
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
