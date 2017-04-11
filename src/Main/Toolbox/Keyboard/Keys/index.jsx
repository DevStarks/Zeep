import React, { Component } from 'react';
import autobind from 'react-autobind';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Key from './key';

const INITIAL_OCTAVE = 4;
const CHR_SCALE = ["C", "C#", "D", "D#", "E", "F",
                   "F#", "G", "G#", "A", "A#", "B"];


class Keys extends Component {
  static propTypes = {
    synth: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    autobind(this);
  }


  keyNames() {
    return CHR_SCALE.concat(CHR_SCALE.slice(0, 4)).map((note, idx) => {
      const octave =  Math.floor(idx / 12) + INITIAL_OCTAVE;
      return note + String(octave);
    });
  }

  renderKeys() {
    return this.keyNames().map((note, i) => {
      return <Key note={note} key={i} synth={this.props.synth} />;
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
