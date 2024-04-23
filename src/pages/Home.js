// import vari
import React from "react";
import { Link } from "react-router-dom";

// import componenti
import Hero from "../components/Hero";
import Form from "../components/Form";

// import immagini
import WorkImg from "../assets/images/work.jpg";
import ReliableImg from "../assets/images/reliable.jpg";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        {/* sezione riassuntiva della sezione chi siamo */}
        <section className="w-full p-10">
          <div className="w-4/5 m-auto flex gap-10 justify-between bg-slate-100 shadow">
            <div className="w-1/2">
              <img
                src={WorkImg}
                alt="working for you"
                className="w-full shadow"
              />
            </div>
            <div className="w-1/2 px-10 flex flex-col justify-evenly">
              <h2 className="text-3xl">Our Mission</h2>
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
                  Show More
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* sezione motivazionale */}
        <section className="w-full p-10">
          <div className="w-4/5 m-auto flex gap-10 justify-between bg-slate-100 shadow">
            <div className="w-1/2 px-10 flex flex-col justify-evenly">
              <h2 className="text-3xl">Why choose us ?</h2>
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
            </div>
            <div className="w-1/2">
              <img src={ReliableImg} alt="Why choose us" className="w-full shadow" />
            </div> 
          </div>
        </section>
        {/* sezione form  */}
        <section className="w-full p-10">
          <div className="w-4/5 m-auto bg-slate-100 pb-10 px-8 shadow">
            <div className="py-10 flex justify-evenly gap-96">
              <h2 className="text-3xl">Complete the form</h2>
              <h2 className="text-3xl">Contact Us</h2>
            </div>
            <div className="w-full flex justify-between">
              <Form />
              <div className="w-1/2 ps-10 flex flex-col justify-evenly">
                <div className="mb-10 bg-white p-5 rounded-xl shadow">
                  <p className="text-xl mb-5">Call us</p>
                  <a
                    href="tel:+393333333333"
                    className="text-3xl text-green-700 hover:text-green-300 transition duration-150 ease-linear"
                  >
                    +39 333 333 3333
                  </a>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                  <p className="text-xl mb-5">Or send us an email</p>
                  <a
                    href="mailto:professionalmail@mail.com"
                    className="text-3xl text-green-700 hover:text-green-300 transition duration-150 ease-linear"
                  >
                    professionalmail@mail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
