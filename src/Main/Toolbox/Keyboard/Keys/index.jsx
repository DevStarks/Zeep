import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Key from './key';

const CHR_SCALE = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const INITIAL_OCTAVE = 4;


class Keys extends Component {
  keyNames() {
    let octave = INITIAL_OCTAVE;
    return CHR_SCALE.concat(CHR_SCALE.slice(0, 4)).map((note, idx) => {
      const octaveDiff = Math.floor(idx / 12);
      return note + String(INITIAL_OCTAVE + octaveDiff);
    });
  }

  renderKeys() {
    return this.keyNames().map((note, i) => {
      return <Key note={note} key={i} />;
    });
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
