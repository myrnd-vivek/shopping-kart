import React from "react";
import styled from "styled-components";
import hero from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
	return (
		<Wrapper>
			<section className="section-header">
				<div className="section-center">
					<h3>
						<a href="/">Home </a>/ about
					</h3>
				</div>
			</section>
			<section className="section-center section">
				<img
					src={hero}
					alt="nice desk"
				/>
				<article>
					<div className="title">
						<h2>our story</h2>
						<div className="underline"></div>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Fugiat accusantium sapiente tempora sed dolore
						esse deserunt eaque excepturi, delectus error accusamus
						vel eligendi, omnis beatae. Quisquam, dicta. Eos quod
						quisquam esse recusandae vitae neque dolore, obcaecati
						incidunt sequi blanditiis est exercitationem molestiae
						delectus saepe odio eligendi modi porro eaque in libero
						minus unde sapiente consectetur architecto. Ullam rerum,
						nemo iste ex, eaque perspiciatis nisi, eum totam velit
						saepe sed quos similique amet. Ex, voluptate accusamus
						nesciunt totam vitae esse iste.
					</p>
				</article>
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
	.title {
		text-align: left;
		h2 {
			line-height: 1;
			font-size: 2.5rem;
			letter-spacing: .1rem;	
			margin-bottom: 0.75rem;
			text-transform: capitalize;
		}
	}

	.underline {
		background: #BCE3C3;
    height: 0.25rem;
    // margin-left: auto;
    // margin-right: auto;
    width: 6rem;
	}
	.section {
    padding: 5rem 0;
	}
`;

export default AboutPage;
