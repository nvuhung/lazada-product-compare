import React from 'react'
import './styles.css'
import {Card} from 'antd'
import ProductImage from './ProductImage'
import ProductMeta from './ProductMeta'

const {Meta} = Card

const ProductCard = ({product, compare}) =>
	<Card
		hoverable
		className="product-card"
		cover={
		<ProductImage 
					product={product} 
					compare={compare} />}>
		
		<Meta
			title={product.name}
			description={
				<ProductMeta 
					product={product} />}/>
	</Card>

export default ProductCard