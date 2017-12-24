import React, {Component} from 'react'
import {message} from 'antd'
import {ProductList, StickCompare, BreadCrumb} from '../../components/'
import {bindActionCreators} from 'redux'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'

const showMaximumMessage = () => {
  message.info('Maximum is 3 products')
}

class Home extends Component {

	componentWillMount() {
		this.props.actions.getProducts()
  }

  componentDidUpdate() {
    const {isOverload} = this.props
    isOverload && showMaximumMessage()
  }

  showMore() {
    const productCompare = this.props.products.filter(product => product.compare)
    const ids = productCompare.map(product => product.id).toString()
    this.props.history.push(`compare?p=${ids}`)
  }

	render() {
    const {actions, products} = this.props
    const productCompare = products.filter(product => product.compare)
    
		return (
      <div>
        <BreadCrumb />
        <div className="content-product-list">
          <ProductList
            compare={actions.compare}
            products={products} />
        </div>
        {
          productCompare.length > 0 &&
          <StickCompare
            showMore={this.showMore.bind(this)}
            compare={actions.compare}
            remove={actions.compare}
            removeAll={actions.removeAllCompareProduct}
            products={productCompare} />
        }
      </div>
    )
	}
}

export default connect(
  state => ({
    products: state.product.products,
    isOverload: state.product.isOverload
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
