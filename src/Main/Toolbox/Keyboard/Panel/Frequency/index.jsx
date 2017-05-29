import React, { Component } from 'react';


import Adjuster from '../components/adjuster'

class Frequency extends Component {
	render() {
		return (
			<div className='panelcontrol'>
				<label>frequency</label>

				<div>
					<Adjuster />
				</div>
			</div>
		);
	}
}

export default Frequency
