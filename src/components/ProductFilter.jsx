import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";

const ProductFilter = () => {
  const {updateFilter, clearFilter, state: {filters: {text}}} = useFilterContext();
  return (
    <Wrapper>
      <div className="content">
        <form>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilter}
            />
          </div>
          <div className="form-control">
            <h5>category</h5>
            <div style={{display: "flex",flexDirection: "column",alignItems: "flex-start"}}>
              <button type="button" name="category" onClick={updateFilter} value="all">all</button>
              <button type="button" name="category" onClick={updateFilter} value="office">office</button>
              <button type="button" name="category" onClick={updateFilter} value="living room">living room</button>
              <button type="button" name="category" onClick={updateFilter} value="kitchen">kitchen</button>
              <button type="button" name="category" onClick={updateFilter} value="bedroom">bedroom</button>
              <button type="button" name="category" onClick={updateFilter} value="dining">dining</button>
              <button type="button" name="category" onClick={updateFilter} value="kids">kids</button>
            </div>
          </div>
          <div className="form-control">
            <h5>company</h5>
            <select name="company" onChange={updateFilter}>
              <option value="all">all</option>
              <option value="marcos">marcos</option>
              <option value="liddy">liddy</option>
              <option value="ikea">ikea</option>
              <option value="caressa">caressa</option>
            </select>
          </div>
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors" style={{display: "flex",alignItems:"center"}}>
              <button name="color" data-color="all" className="all-btn active">all</button>
              <button name="color" className="color-btn" data-color="#ff0000" style={{background: "rgb(255, 0, 0)"}}></button>
              <button name="color" className="color-btn" data-color="#00ff00" style={{background: "rgb(0, 255, 0)"}}></button>
              <button name="color" className="color-btn" data-color="#0000ff" style={{background: "rgb(0, 0, 255)"}}></button>
              <button name="color" className="color-btn" data-color="#000" style={{background: "rgb(0, 0, 0)"}}></button>
              <button name="color" className="color-btn" data-color="#ffb900" style={{background: "rgb(255, 185, 0)"}}></button>
            </div>
          </div>
          <div className="form-control">
            <h5>price</h5>
            <p className="price">$3,099.99</p>
            <input
              type="range"
              name="price"
              min="0"
              max="5000"
              // value="309999"
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
            />
          </div>
        </form>
        <button type="button" onClick={clearFilter} className="clear-btn">clear filters</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .form-control h5 {
    margin-bottom: 0.5rem;
    letter-spacing: var(--spacing);
    line-height: 1.25;
    text-transform: capitalize;
  }
  button {
    // display: block;
    margin: 0.25em 0px;
    padding: 0.25rem 0px;
    text-transform: capitalize;
    background: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .all-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .color-btn {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: rgb(34, 34, 34);
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`
export default ProductFilter;
