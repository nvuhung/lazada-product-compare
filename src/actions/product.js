import * as types from '../constants/types'

export const getProducts = () =>
  dispatch => 
    fetch(`products.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response.products
        })
      })

export const compare = product => ({
	type: types.COMPARE_PRODUCT,
	product
})

export const removeAllCompareProduct = () => ({
	type: types.REMOVE_ALL_COMPARE_PRODUCT
})

export const searchByIds = productIds =>
	dispatch => 
		fetch(`products.json`)
			.then(response => response.json())
			.then(response => {
				const data = response.products.filter(product => 
					productIds.indexOf(product.id) > -1
				)
				dispatch({
					type: types.SEARCH_PRODUCT_BY_ID,
					payload: data
				})
			})

export const removeProduct = product => ({
	type: types.REMOVE_PRODUCT,
	product
})

export const addProduct = product => ({
	type: types.ADD_PRODUCT,
	product
})
