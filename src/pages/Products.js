// react imports
import React, { useEffect, useState, useRef } from "react";

// custom hooks imports
import useFetch from "../utils/useFetch";

// fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// api urls
const url = "https://fakestoreapi.com/products";

const Products = () => {

  const ref = useRef(null);
  const { data, isLoading } = useFetch(url);
  const [filteredData, setFilteredData] = useState(data);
  // console.log(data);

  const handleButton = () => {
    const searchText = ref.current.value.toLowerCase();
    const filtered = data.filter((el) => el.title.toLowerCase().includes(searchText));
    setFilteredData(filtered);
  }

  const handleInput = (e) => {
    if(e.charCode === 13){
      const searchText = ref.current.value.toLowerCase();
      const filtered = data.filter((el) => el.title.toLowerCase().includes(searchText));
      setFilteredData(filtered);
    }
  }

  useEffect(() => {
    setFilteredData(data);
  }, [data])

  return (
    <>
      <section className="w-full">
        <h1 className="text-3xl text-center py-5">Discover Our Products</h1>
        <form className="w-4/5 m-auto relative" onSubmit={(e) => { e.preventDefault()} }>
        <input
            ref={ref}
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Search..."
            className='bg-gray-50 border text-sm rounded-full block h-full w-full p-2.5 placeholder-gray-400'
            onKeyDown={handleInput}
          />
          <button className="absolute top-0 right-0 z-10 bg-gray-500 bg-opacity-10 rounded-full size-10" onClick={handleButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="w-full bg-slate-100 my-5 py-5">
          <div className="w-4/5 m-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredData.map((el) => (
              <div key={el.id} className="p-2 bg-white relative">
                <img
                  src={el.image}
                  alt={el.title}
                  className="aspect-square cursor-pointer w-full"
                />
                <div className="bg-white hidden rounded-full absolute top-1 right-1 size-7 border text-center leading-7">
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
