import React from 'react'
import styled from "styled-components";


const FooterPage = () => {
  return (
    <Wrapper>
      <h5 className='footer'>&#169; 2023 <span className='name'>ShoppingCart</span></h5>
      <h5>All rights reserverd</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bce3c3;
  text-align: center;
  font-weight: 400;
  font-style: italic;
  .footer {
    margin: 0.1rem;
    text-transform: none;
    line-height: 1.25;
  }

  .name {
    padding: 5px;
    color: #AB7A5F;
  }
`;


export default FooterPage