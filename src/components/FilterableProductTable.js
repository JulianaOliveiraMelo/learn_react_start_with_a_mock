import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
export default class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isInStockChecked: false,
			filterText: '',
		};
	}
	changeIsOnStockChecked = val => {
		console.log(val);
		this.setState({
			isInStockChecked: !this.state.isInStockChecked,
		});
	};
	handleTextFilterChange = val => {
		this.setState({
			filterText: val,
		});
	};
	render() {
		return (
			<div>
				<SearchBar
					isCkecked={this.state.isInStockChecked}
					value={this.state.isInStockChecked}
					changeIsOnStockChecked={this.changeIsOnStockChecked}
					filterText={this.state.filterText}
					handleTextFilterChange={this.handleTextFilterChange}
				/>
				<ProductTable
					products={this.props.products[0]}
					isInStock={this.state.isInStockChecked}
					filterText={this.state.filterText}
				/>
			</div>
		);
	}
}
