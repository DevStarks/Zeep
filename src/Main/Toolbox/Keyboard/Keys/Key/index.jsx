import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import { keybind, getKeyboardKey } from './utils/keybind';
import _ from 'lodash';

class Key extends Component {
	static propTypes = {
    synth: React.PropTypes.object.isRequired,
    note: React.PropTypes.string.isRequired,
		overlay: React.PropTypes.oneOf(['qwerty', 'boethian', 'none'])
  }

	state = {
		active: false
	}

	constructor(props, context) {
		super(props);

		this.keyColorClass = this.keyColorClass.bind(this);
		this.activeClass = this.activeClass.bind(this);
		this.setInactive = this.setInactive.bind(this);
		this.setActive = this.setActive.bind(this);
		this.isBlack = this.isBlack.bind(this);
		this.setActive = this.setActive.bind(this);
		this.playNote = this.playNote.bind(this);
		this.stopNote = this.stopNote.bind(this);
		this.relativeNote = this.relativeNote.bind(this);
	}

	componentDidMount() {
		keybind(this.relativeNote(), this.setActive, this.setInactive);
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.active < this.state.active){
			this.playNote();
		} else if(prevState.active > this.state.active){
			this.stopNote();
		}
	}

	playNote() {
		this.props.synth.triggerAttack(this.props.note);
	}

	stopNote() {
		this.props.synth.triggerRelease(this.props.note);
	}

	noteName() {
		return this.props.note.slice(0, -1);
	}

	relativeNote() {
		return this.noteName() + this.props.octave;
	}

	isBlack(note) {
		return this.props.note.includes("#");
	}

	keyColorClass() {
		return this.isBlack() ? ' black' : ' white';
	}

	activeClass() {
		return this.state.active ? 'active' : '';
	}

	setActive() {
		this.setState({ active: true });
	}

	setInactive() {
		this.setState({ active: false });
	}

	renderOverlay() {
		var overlayContent;
		switch (this.props.overlay) {
			case 'none':
				overlayContent = null;
				break;
			case 'qwerty':
				overlayContent = getKeyboardKey(this.relativeNote());
				break;
			case 'boethian':
				overlayContent = this.noteName();
				break;
			default:
				throw new Error('invalid overlay type:' + this.props.overlay);
		}

		return <span className='key-overlay'>{overlayContent}</span>;
	}

	render() {
		return (
			<div styleName='Key' className={this.activeClass() + this.keyColorClass()}>
				<div onMouseDown={this.setActive}
						 onMouseUp={this.setInactive}
						 onDragEnter={this.setActive}
						 onDragExit={this.setInactive}
						 onDoubleClick={this.setActive}>
					{this.renderOverlay()}
				</div>
			</div>
		);
	}
}


export default CSSModules(Key, styles);
