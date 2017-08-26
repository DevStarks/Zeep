import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Adjuster extends Component {
	render() {
		return (
			<div styleName='Adjuster'>
				<div className='display'>{this.props.value}</div>

				<div className='buttons'>
					<div onClick={this.props.onDecrement}>-</div>
					<div onClick={this.props.onIncrement}>+</div>
				</div>
			</div>
		);
	}
}

Adjuster.propTypes = {
	onIncrement: React.PropTypes.func.isRequired,
	onDecrement: React.PropTypes.func.isRequired,
	value: React.PropTypes.node.isRequired
}


export default CSSModules(Adjuster, styles);
