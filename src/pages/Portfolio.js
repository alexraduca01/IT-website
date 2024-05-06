// react imports
import React from "react";

// components imports
import PortfolioCard from "../components/portfolio-components/PortfolioCard";

// data imports
import { Projects } from "../data/Projects";

const Portfolio = () => {
  return (
    <div className="min-height-fix">
      <div className="py-8 flex flex-col justify-center items-center">
        <h1 className="text-3xl">Portfolio</h1>
        <h2 className="text-xl py-4">Scopri i nostri successi!</h2>
      </div>
      <section>
        {
          Projects.map((el) => (
            <PortfolioCard {...el} />
          ))
        }
      </section>
    </div>
  );
};

export default Portfolio;
