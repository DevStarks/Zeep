import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import keybind from './utils/keybind';
import _ from 'lodash';



class Key extends Component {
	static propTypes = {
    synth: React.PropTypes.object.isRequired,
    note: React.PropTypes.string.isRequired
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

	relativeNote() {
		return this.props.note.slice(0, -1) + this.props.octave;
	}

	isBlack(note) {
		return this.props.note.includes("#");
	}

	keyColorClass() {
		return this.isBlack() ? ' black' : ' white';
	}

	activeClass() {
		return this.state.active ? ' active' : '';
	}

	setActive() {
		this.setState({ active: true });
	}

	setInactive() {
		this.setState({ active: false });
	}

	render() {
		return (
			<div styleName='Key' className={this.activeClass() + this.keyColorClass()}>
				<div onMouseDown={this.setActive}
						 onMouseUp={this.setInactive}
						 onDragEnter={this.setActive}
						 onDragExit={this.setInactive}
						 onDoubleClick={this.setActive}/>
			</div>
		);
	}
}


export default CSSModules(Key, styles);
