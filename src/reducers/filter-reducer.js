export const reducer = (state, action) => {
	if (action.type === "LOAD_PRODUCTS") {
		return {
			...state,
			allProduct: [...action.payload],
			filterProduct: [...action.payload],
		};
	}
  if (action.type === "UPDATE_FILTERS") {
    const {name,value} = action.payload;
    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value
      }
    }
  }

  if (action.type === "FILTER_PRODUCTS") {
    const { allProduct } = state;
    const { text, category, company } = state.filters;

    let tempProduct = [...allProduct];

    if (text) {
      tempProduct = tempProduct.filter((product) => {
        console.log(product.name.startsWith(text));
        return product.name.startsWith(text);
      })
    }
    if (category && category !== 'all') {
      tempProduct = tempProduct.filter((product) => {
        return product.category === category;
      })
    }

    if (company && company !== 'all') {
      tempProduct = tempProduct.filter((product) => {
        return product.company === company;
      })
    }
    return {
      ...state,
      filterProduct: tempProduct
    }
  }
};
