import React from "react";
import logo from "../assets/logo-color1.png";
import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


const HeaderPage = () => {
	return (
		<Wrapper>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="shopping cart" />
				</div>
				<ul className="nav-links">
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='about'>About</Link>
					</li>
					<li>
						<Link to='products'>Products</Link>
					</li>
				</ul>
				<div className="cart-btn-wrapper">
					<Link to='cart' className="cart-btn">
						Cart
						<span className="cart-container">
							<BsFillCartFill />
						</span>
						<span className="cart-value">0</span>	
					</Link>
					<a href="/login" className="auth-btn">
						Login <FaUserPlus />
					</a>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;

	.nav-center {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		width: 90vw;
		margin: 0px auto;
		max-width: 1170px;
	}

	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav-header img {
		width: 60px;
		margin-left: -15px;
	}

	.nav-links {
		display: flex;
		justify-content: center;
		font-size: 1rem;
		text-transform: capitalize;
		letter-spacing: 0.1rem;
		padding: 0.5rem;
	}

	.nav-links {
		padding: 0.5rem;
		letter-spacing: 0.1rem;
		font-size: 1rem;

    a {
      color: var(--clr-grey-3);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid #64ab72;
      }
    }
	}

	.cart-btn-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		width: 225px;
	}

	.cart-btn {
		font-size: 1.5rem;
		letter-spacing: 0.1rem;
		color: #64ab72;
		display: flex;
		align-items: center;
	}

	.cart-container {
		display: flex;
		align-items: center;
		position: relative;
	}

  .cart-value {
    position: relative;
    right: 10px;
		bottom: 12px;
    background: #ab7a5f;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: #fff;
    padding: 12px;
  }

	.auth-btn {
		display: flex;
		align-items: center;
		background: transparent;
		border-color: transparent;
		font-size: 1.5rem;
		cursor: pointer;
		color: #64ab72;
		letter-spacing: 0.1rem;
	}

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
	}
`;

export default HeaderPage;
