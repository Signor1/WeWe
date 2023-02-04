import { X } from "phosphor-react";
import React from "react";
import useAuthContext from "../AuthContext/AuthContext";

const Modal = () => {
  const { show, setShow, cart, handleDelete } = useAuthContext();

  const handleCartShow = () => {
    setShow(!show);
  };

  const handleRemove = (id) => {
    handleDelete(id);
  };

  const addition = () => {
    let numArray = [];
    const nums = [...numArray];
    if (cart.length !== 0) {
      cart.map((product) => nums.push(Number(product.productPrice)));
    }
    const sum = nums.reduce((x, y) => x + y);
    console.log(sum);
    const localeString = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(sum);
    return localeString;
  };

  return (
    <main
      className={`bg-slate-900/70 w-full h-screen transition-all duration-300 ease-out fixed left-0 ${
        show ? "top-0" : "-top-[1000px]"
      } flex justify-center items-center`}
      id="modal"
    >
      <div className="lg:w-[600px] w-11/12 lg:h-[420px] h-[27rem] shadow-lg bg-slate-200 px-8 py-4 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-slate-900 md:text-2xl text-xl">Carts</h1>
          <span
            onClick={handleCartShow}
            className="text-slate-900 hover:cursor-pointer"
          >
            <X size={20} color="currentColor" />
          </span>
        </div>
        <hr className="border-[0.025rem] mt-2 border-slate-500" />
        <section className="w-full lg:h-[300px] mt-1 h-80 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col justify-center items-center py-6 w-full h-40">
              <h1 className="text-rose-700 capitalize md:text-2xl text-xl">
                No item avaliable
              </h1>
            </div>
          ) : (
            <div className="flex flex-col py-6 w-full h-full ">
              <ul>
                {cart.map((product) => (
                  <li
                    className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-0 bg-gray-300 rounded-md px-2 md:mb-2 mb-4 border-b py-2 border-slate-500"
                    key={product.id}
                  >
                    <div className="flex gap-5 items-center">
                      <div className="w-28 h-20 rounded-md overflow-hidden">
                        <img
                          src={product.productImg}
                          alt="Product"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font">
                          {product.productCat}
                        </h3>
                        <h2 className="text-gray-900 text-xs md:text-base font-medium">
                          {product.productName}
                        </h2>
                        <p className="font-medium text-xs md:text-base">
                          &#36;{product.productPrice}
                        </p>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:justify-end gap-3">
                      <button className="bg-green-700 text-sm text-slate-300 py-1 lg:px-6 md:px-4 px-6 rounded-md">
                        Purchase
                      </button>
                      <button
                        onClick={() => handleRemove(product.id)}
                        className="bg-rose-700 text-sm text-slate-300 py-1 lg:px-6 md:px-4 px-6 rounded-md"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
        {cart.length === 0 ? null : (
          <div className="flex gap-2 items-center py-2 mt-1 rounded-md pl-3 bg-slate-900 text-slate-300">
            <h2 className="font-light md:text-md text-xs">Total Amount</h2>
            <span className="font-semibold text-xs md:text-md">
              {addition()}
            </span>
          </div>
        )}
      </div>
    </main>
  );
};

export default Modal;
