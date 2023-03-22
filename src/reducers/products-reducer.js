export const reducer = (state,action) => {
  if (action.type === 'LOAD_PRODUCTS') {
    return {...state, products: action.payload}
  }
}