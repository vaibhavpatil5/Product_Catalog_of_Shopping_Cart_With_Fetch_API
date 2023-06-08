import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import "./styles.css";

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    const filterProducts = (category, brand, sortBy) => {
      let filtered = [...products]; // Copy the original products array

      if (category) {
        filtered = filtered.filter((product) => product.category === category);
      }

      if (brand) {
        filtered = filtered.filter((product) => product.brand === brand);
      }

      sortProducts(filtered, sortBy);
    };

    const sortProducts = (filtered, sortBy) => {
      let sorted = [...filtered];

      if (sortBy === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "discount") {
        sorted.sort((a, b) => b.discount - a.discount);
      } else if (sortBy === "price") {
        sorted.sort((a, b) => a.price - b.price);
      } else {
        sorted = [...filtered];
      }

      setFilteredProducts(sorted);
    };

    filterProducts(selectedCategory, selectedBrand, sortBy);
  }, [selectedCategory, selectedBrand, sortBy, products]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleSortByChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
  };

  const handleAddToCart = (product) => {
    if (product.stock < 50) {
      alert("Hurry! Only a few items left.");
    }
    alert("Item added.");
  };

  const brandOptions = Array.from(
    new Set(
      products
        .filter((product) => product.category === selectedCategory)
        .map((product) => product.brand)
    )
  );

  return (
    <div>
      <Navbar
        products={products}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        selectedBrand={selectedBrand}
        handleBrandChange={handleBrandChange}
        brandOptions={brandOptions}
        category={selectedCategory} // Pass the selectedCategory state as the category prop
        sortBy={sortBy}
        handleSortByChange={handleSortByChange}
      />

      <Products
        filteredProducts={filteredProducts}
        products={products}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ProductListingPage;
