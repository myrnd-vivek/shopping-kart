import styled from "styled-components";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";

const ProductsPage = () => {

	return (
		<Wrapper>
			<section className="section-header">
				<div className="section-center">
					<h3>
						<a href="/">Home </a>/ Products
					</h3>
				</div>
			</section>
      <section className="section-center">
        <ProductFilter />
        <ProductList />
			</section>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	.section-header {
		background: #bce3c3;
		width: 100%;
		min-height: 20vh;
		display: flex;
		align-items: center;
		color: var(--clr-primary-1);
	}
	.section-center {
		display: grid;
		gap: 4rem;
		grid-template-columns: 1fr 1fr;
		margin: 0 auto;
		max-width: 1170px;
		width: 95vw;
		h3 {
			line-height: 1;
			font-size: 2rem;
			text-transform: capitalize;
		}
		a {
			text-decoration: none;
			color: #b18b5f;
		}
		img {
			width: 100%;
			display: block;
			border-radius: 0.25rem;
			height: 500px;
			object-fit: cover;
		}
		p {
			line-height: 2;
			max-width: 45em;
			margin: 2rem auto 0px;
			color: var(--clr-grey-5);
		}
	}
`;

export default ProductsPage;
