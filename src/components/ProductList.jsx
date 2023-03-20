import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";

const ProductList = () => {
	const { filterProduct:products } = useFilterContext().state;
	console.log(products);
	return (
		<Wrapper>
			<div className="products-container">
				{products.map((prod) => {
					return <article key={prod.id}>
						<div className="container">
							<img src={prod.image} alt={prod.name} />
						</div>
						<footer>
							<h5>{prod.name}</h5>
							<p>${prod.price}</p>
						</footer>
					</article>;
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    grid-template-columns: repeat(3, 1fr);
  }
`


export default ProductList;
