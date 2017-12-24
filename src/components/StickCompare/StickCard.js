import React from 'react'
import { Icon } from 'antd'

const StickCard = ({product, remove}) => 
  <div>
    <Icon
      onClick={() => remove(product)}
      title="Remove"
      className="icon-remove"
      type="close-circle-o" />
    <a style={{display: 'flex'}}>
      <img 
        width="80" 
        height="80" 
        alt={product.name} 
        src={product.image} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.finalPrice}</p>
      </div>
    </a>
  </div>

export default StickCard