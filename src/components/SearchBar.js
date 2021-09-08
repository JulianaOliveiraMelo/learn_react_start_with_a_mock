import React from 'react';

export default class SearchBar extends React.Component {
	sedInfoToParent = () => {
		const value = !this.props.value;
		this.props.changeIsOnStockChecked(value);
	};
	handleTextFilterChange = event => {
		this.props.handleTextFilterChange(event.target.value);
	};
	render() {
		return (
			<form>
				<input
					type='text'
					placeholder='Search...'
					onChange={this.handleTextFilterChange}
				/>
				<p>
					<input type='checkbox' onChange={this.sedInfoToParent} />
					{''}
					Only show products in stock
				</p>
			</form>
		);
	}
}
