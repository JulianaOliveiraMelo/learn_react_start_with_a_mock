import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import * as PRODUCTS from './API/api';
import FilterableProductTable from './components/FilterableProductTable';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Learn React Start With a Mock</h1>
				<FilterableProductTable products={[PRODUCTS.api]} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
