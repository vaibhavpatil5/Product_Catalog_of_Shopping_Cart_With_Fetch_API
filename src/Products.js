import React from "react";
import "./styles.css";

export default function Products(props) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-7">
        {props.filteredProducts.map((product) => (
          <div key={product.id}>
            <div className="bg-gray-200 flex justify-center items-center border-black flex-wrap gap-6 p-8">
              <div className="w-[300px] h-[500px] bg-white flex max-w-[70%] flex-col justify-between rounded-md overflow-hidden shadow-sm relative">
                <img
                  src={product.images[0]}
                  alt="product"
                  className="h-full w-[80%] object-cover mt-4 mr-auto ml-auto bg-slate-100 rounded-md"
                />

                <div className="p-5">
                  <div className="flex justify-between">
                    <div className="text-gray-600 uppercase text-xs font-semibold tracking-wider">
                      {product.category} &bull; {product.brand}
                    </div>
                    <span className="text-sm flex items-center gap-1">
                      <svg
                        className="h-4 w-4 text-yellow-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 1l2.928 6.377 6.538.95-4.75 4.588 1.12 6.516L10 16.664l-5.836 3.767 1.12-6.516-4.75-4.588 6.538-.95L10 1z" />
                      </svg>
                      {product.rating}
                    </span>
                  </div>

                  <h3 className="font-bold font-semibold text-xl mb-2 mt-2">
                    {product.title}
                  </h3>
                  <p className="font-medium mb-2 text-sm text-gray-700">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">
                      ${product.price}
                    </span>
                    <button
                      href="#"
                      className="linear rounded-[20px] text-white bg-blue-600 hover:bg-blue-900 font-semibold text-sm px-5 py-2.5 text-center"
                      onClick={() => props.handleAddToCart(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
