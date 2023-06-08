import React from "react";
import "./styles.css";

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <div class="navbar">
          <div class="dropdown">
            <label for="category">Category:</label>
            <select
              id="category"
              value={props.selectedCategory}
              onChange={props.handleCategoryChange}
            >
              <option value="">All</option>
              {/* <!-- Render category options based on available categories --> */}
              {Array.from(
                new Set(props.products.map((product) => product.category))
              ).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {props.selectedCategory && (
            <div class="dropdown">
              <label for="brand">Brand:</label>
              <select
                id="brand"
                value={props.selectedBrand}
                onChange={props.handleBrandChange}
              >
                <option value="">All</option>
                {/* <!-- Render brand options based on available brands for the selected category --> */}
                {props.brandOptions?.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div class="dropdown">
            <label for="sortBy">Sort by:</label>
            <select
              id="sortBy"
              value={props.sortBy}
              onChange={props.handleSortByChange}
            >
              <option value="">None</option>
              <option value="rating">Rating</option>
              <option value="discount">Discount</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}
