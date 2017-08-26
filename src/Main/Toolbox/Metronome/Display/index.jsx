import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Beat from './Beat';

class Display extends Component {
  constructor(props) {
    super(props);

    window.transport = this.props.transport;

    this.renderBeat = this.renderBeat.bind(this);
    this.renderBeats = this.renderBeats.bind(this);
    this.getCurrentQuarterNote = this.getCurrentQuarterNote.bind(this);
    this.tick = this.tick.bind(this);

    this.state = {
      activeBeat: this.getCurrentQuarterNote()
    }
  }

  componentDidMount() {
    this.props.transport.scheduleRepeat(this.tick, '4n')
  }

  tick() {
    this.setState({
      activeBeat: this.getCurrentQuarterNote()
    })
  }

  getCurrentQuarterNote() {
    return Number(this.props.transport.position.split(':')[1]);
  }

  beatActive(pos) {
    return this.state.activeBeat === pos && this.props.transport.state === 'started';
  }

  renderBeat(_, pos) {
    return <Beat key={pos}
                 position={pos}
                 active={this.beatActive(pos)} />;
  }

  renderBeats() {
    return Array(this.props.meter).fill('').map(this.renderBeat);
  }

	render() {
		return (
			<div styleName='Display'>
        {this.renderBeats()}
			</div>
		);
	}
}

Display.propTypes = {
  meter: PropTypes.number.isRequired,
  transport: PropTypes.object.isRequired
}


export default CSSModules(Display, styles);
