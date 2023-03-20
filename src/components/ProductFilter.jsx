import React from "react";

const ProductFilter = () => {
  return (
    <div>
      <section className="sc-ipEyDJ dwTmBB">
        <div className="content">
          <form>
            <div className="form-control">
              <input
                type="text"
                name="text"
                placeholder="search"
                className="search-input"
                value=""
              />
            </div>
            <div className="form-control">
              <h5>category</h5>
              <div>
                <button
                  type="button"
                  name="category"
                  className="active"
                >
                  all
                </button>
                <button
                  type="button"
                  name="category"
                  className="null"
                >
                  office
                </button>
                <button
                  type="button"
                  name="category"
                  className="null"
                >
                  living room
                </button>
                <button
                  type="button"
                  name="category"
                  className="null"
                >
                  kitchen
                </button>
                <button
                  type="button"
                  name="category"
                  className="null"
                >
                  bedroom
                </button>
                <button
                  type="button"
                  name="category"
                  className="null"
                >
                  dining
                </button>
                <button
                  type="button"
                  name="category"
                  className="null"
                >
                  kids
                </button>
              </div>
            </div>
            <div className="form-control">
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
              <label for="shipping">free shipping</label>
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
              />
            </div>
          </form>
          <button type="button" className="clear-btn">
            clear filters
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductFilter;
