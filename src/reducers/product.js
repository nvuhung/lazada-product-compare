import * as types from '../constants/types'

const MAX_PRODUCT = 3
const INITIAL_STATE = {
  products: [],
  isOverload: false
}

const getProductCompare = products => {
  return products.filter(product => product.compare)
}

const fetchProduct = (state, action) => {
  return {
    ...state, 
    products: action.payload.map(product =>
      ({...product, compare: false})
    )
  }
}

const compareProduct = (state, action) => {
  
  const {product} = action
  let {products} = state
  
  const isOverload = 
    !product.compare 
    && getProductCompare(products).length === MAX_PRODUCT

  if(!isOverload) {
    products = state.products.map(item =>
      item.id === product.id ?
        ({...item, compare: !product.compare}) :
        item
    )
  }

  return {
    ...state, 
    products: products,
    isOverload: isOverload
  }
}

const removeAllCompareProduct = (state, action) => {
  return {
    ...state, 
    products: state.products.map(product => {
      return {...product, compare: false} 
    })
  }
}

const searchProducts = (state, action) => {
  return {
    ...state, 
    products: action.payload.map(product => {
      return {...product, compare: true}
    })
  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return fetchProduct(state, action)
    case types.COMPARE_PRODUCT:
      return compareProduct(state, action)
    case types.REMOVE_ALL_COMPARE_PRODUCT:
      return removeAllCompareProduct(state, action)
    case types.SEARCH_PRODUCT:
      return searchProducts(state, action)
    default:
      return state
  }
}