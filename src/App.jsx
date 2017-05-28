import React, { Component } from 'react';
import Main from './Main';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

window._store = store

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}

export default App;
