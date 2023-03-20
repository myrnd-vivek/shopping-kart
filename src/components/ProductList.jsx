import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const ProductList = () => {
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://course-api.com/react-store-products")
			.then((resp) => resp.json())
			.then((result) => {
				setProducts(result);
				setLoading(false);
			})
			.catch((err) => setError(err));
	}, []);
	return (
		<Wrapper>
			{loading ? (
				<div>loading...</div>
			) : (
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
			)}
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
