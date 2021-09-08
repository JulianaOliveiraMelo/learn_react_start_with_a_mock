import React from 'react';
export default class ProductRow extends React.Component {
	render() {
		const product = this.props.product;

		return (
			<tr>
				<td>{product.name}</td>
				<td>{product.price}</td>
			</tr>
		);
	}
}
