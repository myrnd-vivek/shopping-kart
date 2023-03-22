import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/products-reducer";

const ProductContext = createContext();

const initialState = {};

export const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://course-api.com/react-store-products")
			.then((resp) => resp.json())
			.then((result) => {
				dispatch({ type: "LOAD_PRODUCTS", payload: result });
			});
  },[]);
	return (
		<ProductContext.Provider value={state}>
			{children}
		</ProductContext.Provider>
	);
};

export const useProductContext = () => {
	return useContext(ProductContext);
};
