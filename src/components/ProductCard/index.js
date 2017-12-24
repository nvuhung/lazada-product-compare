import React from 'react'
import './styles.css'
import {Card, Rate, Button} from 'antd'

const {Meta} = Card

const getProductMeta = (product) => {
	return (
		<div className="product-meta">
			<span style={{ display: 'block' }}>
			<Rate 
				value={product.review} 
				style={{fontSize: 15}}/>
				{   
					product.review && 
						<span className="ant-rate-text">({product.review} reviews)</span>
				}
			</span>
			<span className="final-price">{product.finalPrice}</span>
			<span className="discount">{product.discount}</span>
			<p className="old-price">{product.oldPrice}</p>
		</div>
	)
}

const getProductImage = (product, compare, hideRemoveButton) => {
	return (
		<div style={{textAlign: 'center'}}>
			<img alt={product.name} src={product.image}/>
			<div className="image_overlay"></div>
      {
        !hideRemoveButton && 
        <div className="view_details">
          <Button 
            onClick={() => compare(product)} 
            type="primary">
            {product.compare ? "Remove" : "Compare"}
          </Button>
        </div>
      }
		</div>
	)
}

const ProductCard = ({product, compare, hideRemoveButton}) =>
	<Card
		hoverable
		className="product-card"
		cover={getProductImage(product, compare, hideRemoveButton)}>
		<Meta
			title={product.name}
			description={getProductMeta(product)}
		/>
	</Card>

export default ProductCard