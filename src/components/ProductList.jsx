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
							<h5>${prod.price}</h5>
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
		img {
			height: 175px;
			width: 100%;
			display: block;
			object-fit: cover;
			border-radius: var(--radius);
			transition: var(--transition);
		}
		footer {
			margin-top: 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
  }
`


export default ProductList;
