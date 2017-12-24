import React, {Component} from 'react'
import {Select} from 'antd'

const Option = Select.Option
class SearchProduct extends Component {

  constructor(props) {
		super(props)

		this.state = {
      options: []
		}

    this.handleChange = this.handleChange.bind(this)
    this.onSelect = this.onSelect.bind(this)
	}
  
  async handleChange(value) {
    if (!value) {
      this.setState({ options: [] });
    } else {
      const res = await fetch('products.json')
      const {products} = await res.json()
      const options = products.filter(product => 
        product.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
      this.setState({options})
    }
  }

  onSelect(producId) {
    const product = this.state.options.find(product => product.id === producId)
    this.props.onSelect(product);
  }

  render() {
    const options = this.state.options.map(d => <Option key={d.id}>{d.name}</Option>)
    const container = this.props.container 
                    ? document.getElementById(this.props.container)
                    : document.body
    return (
      <Select
        mode="combobox"
        style={{ width: 200 }}
        onSearch={this.handleChange}
        showArrow={false}
        filterOption={false}
        getPopupContainer={() => container}
        onSelect={this.onSelect}
        placeholder="Enter the account name"
      >
        {options}
      </Select>
    );
  }
}
export default SearchProduct