import React, { Component } from 'react';
import autobind from 'react-autobind';


class Key extends Component {
	static propTypes = {
    synth: React.PropTypes.object.isRequired,
    note: React.PropTypes.string.isRequired
  }

	state = {
		active: false
	}

	constructor(props) {
		super(props);

		autobind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.active < this.state.active){
			this.props.synth.triggerAttack();
		} else if(prevState.active > this.state.active){
			this.props.synth.triggerRelease();
		}
	}

	keyColorClass() {
		return this.props.note.includes("#") ? ' black' : ' white';
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
			<div className={this.props.note + this.activeClass() + this.keyColorClass()}
				 	 onMouseDown={this.setActive}
					 onMouseUp={this.setInactive}
					 onDragEnter={this.setActive}
					 onDragExit={this.setInactive}
					 onDoubleClick={this.setActive}>

			</div>
		);
	}
}


export default Key;
