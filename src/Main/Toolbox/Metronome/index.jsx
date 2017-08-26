import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux'
import styles from './styles.scss';

import Display from './Display';


class Metronome extends Component {
	render() {
		return (
			<div styleName='Metronome'>
        <Display meter={this.props.meter} transport={this.props.transport} />
			</div>
		);
	}
}

// Metronome container

const mapStateToProps = ({ metronome: { meter, transport } }) => ({ meter, transport })

export default connect(
  mapStateToProps,
  {}
)(CSSModules(Metronome, styles))
