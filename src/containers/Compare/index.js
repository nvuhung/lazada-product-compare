import React, {Component} from 'react'
import { Row, Col, Card } from 'antd'
import {ProductCard, SearchProduct} from '../../components'
import './styles.css'
import {bindActionCreators} from 'redux'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'
import queryString from 'query-string'
import {withRouter} from 'react-router-dom'

const Fragment = React.Fragment
class Compare extends Component {

  componentWillMount() {
    this.props.actions.getProducts()
    const {p} = queryString.parse(this.props.location.search)
    if(!p || !p.length) {
      this.goToHomePage()
    } else {
      this.props.actions.searchByIds(p.split(','))
    }
  }

  getTitle() {
    const products = this.props.products.filter(product => product.compare)
    return (
      <h2 style={{ margin: '10px 0'}}>
        Compare: {
          products.map((product, idx) => (
            <span key={product.id}>
              <strong>{product.name}</strong>
              {idx < products.length - 1 && ' vs '}
            </span>
          ))
        }
      </h2>
    )
  }

  goToHomePage() {
    this.props.history.push('/')
  }

  componentDidUpdate() {
    !this.props.products.length && this.goToHomePage()
  }

  onSelect(product) {
    this.props.actions.addProduct(product)
  }

	render() {
    const {actions} = this.props

    const products = Array(3).fill({})

		this.props.products.forEach((product, index) =>
			products[index] = product
		)

		return (
      <Fragment>
        {
          this.getTitle()
        }
        <div className="content-product-list" style={{ minHeight: 800 }}>
          <Row>
            {
              products.map((product, idx) => 
                <Col key={idx} span={8}>
                    {
                      product.id 
                        ? <ProductCard 
                            compare={actions.removeProduct}
                            key={product.id}
                            product={product} />
                        : <Card 
                            className="compare-no-product"
                            key={idx} 
                            id={`search-product-${idx}`}>
                            <SearchProduct 
                              {...this.props}
                              compare={product => this.onSelect(product)}
                              container={`search-product-${idx}`} />
                          </Card>
                    }
                </Col>
              )
            }
          </Row>
        </div>
      </Fragment>
    )
	}
}

export default withRouter(connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Compare))
