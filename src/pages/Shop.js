// react imports
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

// custom hooks imports
// import useFetch from "../utils/useFetch";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// components imports
import Product from "../components/shop-components/Product";

import { PRODUCTS } from "../data/Products"; 

// api urls
// const url = "https://fakestoreapi.com/products";

const Shop = () => {
  const ref = useRef(null);
  // const { data, isLoading } = useFetch(url);
  const [filteredData, setFilteredData] = useState(PRODUCTS);
  // console.log(data);

  const handleButton = () => {
    const searchText = ref.current.value.toLowerCase();
    const filtered = PRODUCTS.filter((el) =>
      el.title.toLowerCase().includes(searchText)
    );
    setFilteredData(filtered);
  };

  const handleInput = (e) => {
    if (e.charCode === 13) {
      const searchText = ref.current.value.toLowerCase();
      const filtered = PRODUCTS.filter((el) =>
        el.title.toLowerCase().includes(searchText)
      );
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    setFilteredData(PRODUCTS);
  }, [PRODUCTS]);

  return (
    <>
      <section className="w-full">
        <h1 className="text-3xl text-center py-5 xl:py-10">Take a look at our shop!</h1>
        <Link to="/cart">Cart</Link>
        <form
          className="w-4/5 m-auto relative"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            ref={ref}
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Search..."
            className="bg-gray-50 border text-sm rounded-full block h-full w-full p-2.5 placeholder-gray-400"
            onKeyDown={handleInput}
          />
          <button
            className="absolute top-0 right-0 z-10 bg-gray-500 bg-opacity-10 rounded-full size-10"
            onClick={handleButton}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="w-full bg-slate-100 my-5 py-5">
          <div className="w-4/5 m-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredData.map((el) => (
              <div key={el.id} className="p-2 bg-white relative">
                <Product {...el} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
