import React from 'react'
import {Rate} from 'antd'

const ProductMeta = ({product}) => 
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

export default ProductMeta