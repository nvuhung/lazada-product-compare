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
      const {products} = await (await fetch('products.json')).json()

      const productSelected = 
        (this.props.products && this.props.products.map(product => product.id)) || []
          
      const options = products.filter(product => {
        return product.name.toLowerCase().indexOf(value.toLowerCase()) > -1
        && (!productSelected.length || productSelected.indexOf(product.id) === -1)
      })
      this.setState({options})
    }
  }

  onSelect(producId) {
    const product = this.state.options.find(product => product.id === producId)
    this.props.compare(product);
  }

  render() {
    const options = this.state.options.map(d => <Option key={d.id}>{d.name}</Option>)
    const container = this.props.container 
                    ? document.getElementById(this.props.container)
                    : document.body
    return (
      <Select
        mode="combobox"
        style={{ width: '100%' }}
        onSearch={this.handleChange}
        showArrow={false}
        filterOption={false}
        getPopupContainer={() => container}
        onSelect={this.onSelect}
        placeholder="Enter the phone name..."
      >
        {options}
      </Select>
    );
  }
}
export default SearchProduct