import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux'
import styles from './styles.scss';

import Display from './Display';
import Panel from './Panel';


class Metronome extends Component {
	render() {
		return (
			<div styleName='Metronome'>
        <Display {...this.props} />
				<Panel />
			</div>
		);
	}
}

// Metronome container

const mapStateToProps = ({ metronome: { meter, transport, tempo } }) => ({ meter, transport, tempo })

export default connect(
  mapStateToProps,
  {}
)(CSSModules(Metronome, styles))
