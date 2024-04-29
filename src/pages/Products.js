// react imports
import React, { useEffect, useState } from "react";

// custom hooks imports
import useFetch from "../utils/useFetch";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

// api urls
const url = "https://fakestoreapi.com/products?limit=10";

const Products = () => {
  const { data, isLoading } = useFetch(url);
  console.log(data);

  return (
    <>
      <section className="w-full">
        <h1 className="text-3xl text-center py-5">Discover Our Products</h1>
        <div className="w-full bg-slate-100 my-5 py-5">
          <div className="w-4/5 m-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data.map((el) => (
              <div key={el.id} className="p-2 bg-white relative">
                <img
                  src={el.image}
                  alt={el.title}
                  className="aspect-square cursor-pointer w-full"
                />
                <div className="bg-white rounded-full absolute top-1 right-1 size-7 border text-center leading-7">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="cursor-pointer text-gray-500 hover:text-red-500 transition duration-300 ease-linear"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xs sm:text-base cursor-pointer">
                      {el.title.substr(0, 20)}
                    </h2>
                    <p className="text-xs sm:text-base cursor-pointer">
                      {el.price}€
                    </p>
                  </div>
                  <div className="bg-white rounded-full size-7 border text-center leading-7">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="cursor-pointer text-gray-500 hover:text-green-500 transition duration-300 ease-linear size-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
