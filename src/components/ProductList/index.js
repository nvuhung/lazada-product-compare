import React from 'react'
import ProductCard from '../ProductCard'
import { Col, Row } from 'antd'

const ProductList = ({products, compare}) =>
  <div style={{ padding: '10px' }}>
    <Row gutter={16}>
      {
        products.map(product => 
          <Col 
            key={product.id} 
            style={{ marginBottom: 30 }} 
            className="gutter-row" span={6}>
            <ProductCard 
              key={product.id} 
              product={product} 
              compare={compare} />
          </Col>
        )
      }
    </Row>
  </div>

export default ProductList