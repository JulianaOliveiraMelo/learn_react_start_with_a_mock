import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
export default class ProductTable extends React.Component {
	render() {
		const rows = [];
		let lastCategory = null;
		const filterText = this.props.filterText;
		this.props.products.forEach(product => {
			if (product.name.indexOf(filterText) === -1) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						key={product.category}
						category={product.category}
					/>
				);
			}
			if (this.props.isInStock === true && product.stocked) {
				rows.push(<ProductRow key={product.name} product={product} />);
			} else if (this.props.isInStock === false) {
				rows.push(<ProductRow key={product.name} product={product} />);
			}
			lastCategory = product.category;
		});
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			</div>
		);
	}
}
