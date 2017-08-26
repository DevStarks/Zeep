import React, { PropTypes, Component } from 'react';

class Beat extends Component {
  constructor(props) {
    super(props);

    this.className = this.className.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      accented: (props.position === 0)
    }
  }

  componentWillReceiveProps() {
    this.handleSoundTrigger()
  }

  handleSoundTrigger() {
    if(this.props.active){
      // play sound
    }
  }

  className() {
    return 'beat' + (this.state.accented ? ' accented' : '') + (this.props.active ? ' active' : '')
  }

  toggle() {
    this.setState({
      accented: !this.state.accented
    });
  }

  render() {
    return <div className={this.className()} onClick={this.toggle} />;
  }
}

Beat.propTypes = {
  position: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Beat;
