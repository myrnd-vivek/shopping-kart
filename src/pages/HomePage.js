import React from "react";
import styled from "styled-components";

const HomePage = () => {
	return (
		<Wrapper>
			<section className="section-center">
				<article className="content">
					<h1>
						design your <br />
						comfort zone
					</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Iusto, at sed omnis corporis doloremque possimus
						velit! Repudiandae nisi odit, aperiam odio ducimus,
						obcaecati libero et quia tempora excepturi quis alias?
					</p>
					<a className="btn hero-btn" href="/products">
						shop now
					</a>
				</article>
        <article className="img-container">
          <img src="/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" alt="nice table" className="main-img" />
          <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg" alt="person working" className="accent-img" />
        </article>
			</section>
			<section class="sc-ftTHYK HfPUG">
				<div class="section-center">
					<h3>Join our newsletter and get 20% off</h3>
					<div class="content">
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
						<form class="contact-form">
							<input type="email" class="form-input" placeholder="enter email" />
							<button type="submit" class="submit-btn">subscribe</button>
						</form>
					</div>
				</div>
			</section>
		</Wrapper>
	);
};

const Wrapper = styled.main`

`;

export default HomePage;
