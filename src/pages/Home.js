// import vari
import React from "react";
import { Link } from "react-router-dom";

// import componenti
import Hero from "../components/Hero";

// import immagini
import WorkImg from "../assets/images/work.jpg";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        {/* sezione riassuntiva della sezione chi siamo */}
        <section className="w-full p-10">
          <div className="w-4/5 m-auto flex gap-10 justify-between bg-slate-100">
            <div className="w-1/2">
              <img src={WorkImg} alt="working for you" className="w-full" />
            </div>
            <div className="w-1/2 px-10 flex flex-col justify-evenly">
              <h2 className="text-3xl">IT Website</h2>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                convallis sem eu elit accumsan, non sagittis ipsum vulputate.
                Sed eget dictum elit. Praesent porttitor urna in ligula posuere
                tempor. Nam semper est ac arcu vestibulum, quis luctus nisi
                commodo. Nulla eget aliquam est. Morbi rhoncus risus vel ipsum
                viverra eleifend. Nullam varius sapien nec augue fermentum, a
                fringilla metus posuere. Vivamus eu aliquet turpis. Integer
                tristique vestibulum mi, id gravida purus lobortis vel. Sed
                pharetra, ipsum a pellentesque finibus, purus quam laoreet
                justo, ut ultrices turpis ante non mi. Suspendisse potenti. Duis
                consectetur nisl et quam laoreet, sed posuere ligula posuere.
                Aenean fermentum risus quis metus convallis, in lacinia ligula
                fermentum. Morbi sed scelerisque lacus. Cras sit amet diam nec
                velit volutpat fermentum.
              </p>
              <Link to="/about">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Scopri di più
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* sezione form per preventivo  */}
        <section className="w-full p-10">
          <div className="w-4/5 m-auto bg-slate-100 pb-10 px-8">
            <h2 className="text-3xl text-center py-10">Contattaci</h2>
            <div className="w-full flex justify-between">
              <form className="w-1/2 m-auto p-5 bg-white rounded-md flex flex-col gap-5">
                <div className="flex gap-3 justify-between">
                  <div className="w-1/2">
                    <label
                      for="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      for="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Cognome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="text"
                    className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label
                    for="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    type="text"
                    id="message"
                    className="bg-gray-50 border text-sm rounded-lg block w-full p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-full flex justify-center gap-10">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  >
                    Invia
                  </button>
                  <button
                    type="reset"
                    className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                  >
                    Annulla
                  </button>
                </div>
              </form>
              <div className="w-1/2 ps-10">
                <p className="text-xl mb-5">Oppure chiamaci al</p>
                <a href="tel:+393333333333" className="text-3xl text-green-700 hover:text-green-300 transition duration-150 ease-linear">+39 333 333 3333</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
