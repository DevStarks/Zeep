import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Key from './key';

const INITIAL_OCTAVE = 4;
const CHR_SCALE = ["C", "C#", "D", "D#", "E", "F",
                   "F#", "G", "G#", "A", "A#", "B"];


class Keys extends Component {
  static propTypes = {
    synth: React.PropTypes.object.isRequired,
    overlay: React.PropTypes.oneOf(['qwerty', 'boethian', 'none']).isRequired
  }

  constructor(props) {
    super(props);

    this.renderKeys = this.renderKeys.bind(this);
    this.renderKey = this.renderKey.bind(this);
    this.keyNames = this.keyNames.bind(this);
  }

  fullOctave() {
    return CHR_SCALE;
  }

  halfOctave() {
    return CHR_SCALE.slice(0, 5);
  }

  keyNames() {
    return this.fullOctave().concat(this.halfOctave()).map(this.getkeyName);
  }

  getkeyName(note, idx) {
    const octave = Math.floor(idx / 12) + INITIAL_OCTAVE;
    return note + String(octave);
  }

  renderKeys() {
    return this.keyNames().map(this.renderKey);
  }

  renderKey(note, idx) {
    // octave relative to bottom of keyboard - starts at 1
    const octave = Math.floor(idx / 12) + 1;

    return <Key note={note} octave={octave} key={idx} overlay={this.props.overlay} synth={this.props.synth} />;
  }

	render() {
		return (
			<div styleName='Keys'>
				{this.renderKeys()}
			</div>
		);
	}
}


export default CSSModules(Keys, styles);
