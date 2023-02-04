import React from "react";
import Modal from "./Modal";
import { ProductData } from "./ProductData";
import useAuthContext from "../AuthContext/AuthContext";

const Products = () => {
  const { handleFilter } = useAuthContext();

  const handleCart = (id) => {
    handleFilter(id);
  };

  return (
    <>
      <section className="text-gray-600 body-font px-4">
        <div className="container px-5 md:py-12 py-8 mx-auto">
          <h1 className="py-2 md:text-3xl text-2xl font-light text-slate-900 tracking-widest">
            Flash Sales
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-10 md:gap-6 gap-8 mt-4">
            {ProductData.map((product) => (
              <div
                className="p-4 bg-slate-200 w-full rounded-lg"
                key={product.id}
              >
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.productImg}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.productCat}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.productName}
                  </h2>
                  <div className="flex justify-between items-center  mt-2">
                    <p className="font-medium">&#36;{product.productPrice}</p>
                    <button
                      onClick={() => handleCart(product.id)}
                      className="bg-slate-900 text-sm text-slate-300 py-1 lg:px-6 md:px-4 px-6 rounded-md"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal />
    </>
  );
};

export default Products;
