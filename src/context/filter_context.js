import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/filter-reducer";

const FilterContext = createContext();

const initialState = {
	allProduct: [],
	filterProduct: [],
	filters: {
		text: "",
		category: "all",
	},
};

export const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		fetch("https://course-api.com/react-store-products")
			.then((resp) => resp.json())
			.then((result) => {
				dispatch({ type: "LOAD_PRODUCTS", payload: result });
			});
	}, []);

  useEffect(() => {
    dispatch({type: "FILTER_PRODUCTS"})
  },[state.filters])

	const updateFilter = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
	};

	const clearFilter = (e) => {
		console.log(e.target.value);
	};
	return (
		<FilterContext.Provider value={{ state, updateFilter, clearFilter }}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};
