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
      </div>
    </>
  );
};

export default Home;
