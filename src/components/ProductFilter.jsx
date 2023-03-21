import React from "react";
import { useFilterContext } from "../context/filter_context";

const ProductFilter = () => {
  const {updateFilter, clearFilter, state: {filters: {text}}} = useFilterContext();
  return (
    <section>
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
            <div style={{display: "flex",flexDirection: "column"}}>
              <button type="button" name="category" onClick={updateFilter} value="all">all</button>
              <button type="button" name="category" onClick={updateFilter} value="office">office</button>
              <button type="button" name="category" onClick={updateFilter}>living room</button>
              <button type="button" name="category" onClick={updateFilter}>kitchen</button>
              <button type="button" name="category" onClick={updateFilter}>bedroom</button>
              <button type="button" name="category" onClick={updateFilter}>dining</button>
              <button type="button" name="category" onClick={updateFilter}>kids</button>
            </div>
          </div>
          {/* <div className="form-control">
            <h5>company</h5>
            <select name="company" className="company">
              <option value="all">all</option>
              <option value="marcos">marcos</option>
              <option value="liddy">liddy</option>
              <option value="ikea">ikea</option>
              <option value="caressa">caressa</option>
            </select>
          </div>
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              <button
                name="color"
                data-color="all"
                className="all-btn active"
              >
                all
              </button>
              <button
                name="color"
                className="color-btn"
              ></button>
              <button
                name="color"
                className="color-btn"
              ></button>
              <button
                name="color"
                className="color-btn"
              ></button>
              <button
                name="color"
                className="color-btn"
              ></button>
              <button
                name="color"
                className="color-btn"
              ></button>
            </div>
          </div>
          <div className="form-control">
            <h5>price</h5>
            <p className="price">$3,099.99</p>
            <input
              type="range"
              name="price"
              min="0"
              max="309999"
              value="309999"
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
            />
          </div> */}
        </form>
        <button type="button" onClick={clearFilter} className="clear-btn">clear filters</button>
      </div>
    </section>
  );
};

export default ProductFilter;
