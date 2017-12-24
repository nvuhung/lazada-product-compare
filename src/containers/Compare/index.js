import React, {Component} from 'react'
import { Row, Col } from 'antd'
import {ProductCard} from '../../components'
import {bindActionCreators} from 'redux'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'
import queryString from 'query-string'

class Compare extends Component {

  componentWillMount() {
    const {p} = queryString.parse(this.props.location.search)
    this.props.actions.searchProducts(p.split(','))
  }

	render() {
    const {products} = this.props

		return (
      <div className="content-product-list" style={{ minHeight: 800 }}>
        <Row>
          {
            products.map(product => 
              <Col key={product.id} span={8}>
                <ProductCard 
                    key={product.id} 
                    hideRemoveButton="true"
                    product={product} />
              </Col>
            )
          }
        </Row>
      </div>
    )
	}
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Compare)
