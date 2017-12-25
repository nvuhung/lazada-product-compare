import React, {Component} from 'react'
import {Button} from 'antd'
import Image from '../Image'

class ProductImage extends Component {

	constructor(props) {
		super(props)

		this.handleOnClick = this.handleOnClick.bind(this)
	}

	handleOnClick(event) {
		const {product, compare} = this.props
		compare(product)
		event.preventDefault()
	}

	render() {
		const {product} = this.props
		return (
			<div style={{textAlign: 'center'}}>
				<Image alt={product.name} src={product.image}/>
				<div className="image_overlay"></div>
				<div className="view_details">
					<Button 
						onClick={(event) => this.handleOnClick(event)} 
						type="primary">
						{product.compare === true ? "Remove" : "Compare"}
					</Button>
				</div>
			</div>
		)
	}
}

export default ProductImage