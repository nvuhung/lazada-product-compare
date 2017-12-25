import React, {Component} from 'react'
import {Col, Row, Popconfirm, Button, Icon} from 'antd'
import './styles.css'
import StickCard from './StickCard'
import SearchProduct from '../SearchProduct'
import PropTypes from 'prop-types'

const MAX_PRODUCT = 3

class StickCompare extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isCollapsed: false
		}

		this.collapse = this.collapse.bind(this)
		this.onSelect = this.onSelect.bind(this)
	}

	collapse() {
		this.setState((prevState) => {
			return {isCollapsed: !prevState.isCollapsed}
		})
	}

	onSelect(product) {
		this.props.compare(product)
	}

	render() {
		const {compare, removeAllCompareProduct, showMore} = this.props
		const products = Array(MAX_PRODUCT).fill({})

		this.props.products.forEach((product, index) =>
			products[index] = product
		)

		return (
			<div className="stick-compare">
				<div id="remove-confirm"></div>
				<div className="small-stick">
					<ul>
						<li onClick={this.collapse}>
							{this.state.isCollapsed ? 'Expand' : 'Collapse'}
							<Icon
								style={{padding: 5}}
								type={this.state.isCollapsed ? 'caret-up' : 'caret-down'} />
						</li>
						<li><span>|</span></li>
						<li	title="Remove all product compare">
							<Popconfirm
								getPopupContainer={() => document.getElementById('remove-confirm')}
								title="Are you sure delete all product compare?" 
								onConfirm={removeAllCompareProduct}
								overlayClassName="fixed-position"
								okText="Yes" 
								cancelText="No">
								Close
							</Popconfirm>
						</li>
					</ul>
				</div>
					{
						!this.state.isCollapsed &&
						<div className="full-stick">
							<Row className="row-compare" gutter={16}>
								{
									products.map((product, idx) => 
										<Col 
											key={idx} 
											className="col-compare" span={6}
											xs={24} sm={12} md={6}>
											{
												product.id 
													? <StickCard 
															key={idx} 
															product={product} 
															remove={compare} /> 
													: <div id={`stick-search-product-${idx}`}>
															<SearchProduct 
																{...this.props}
																container={`stick-search-product-${idx}`} 
																key={idx} />
														</div>
											}
										</Col>
									)
								}
								<Col span={6} className="show-more">
									<Button onClick={showMore} type="primary">Show more</Button>
								</Col>
							</Row>
						</div>
					}
			</div>
		)
	}
}

StickCompare.propTypes = {
    name: PropTypes.array,
    removeProduct: PropTypes.func
}

StickCompare.defaultProps = {
    products: []
}

export default StickCompare