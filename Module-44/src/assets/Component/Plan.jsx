import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Plan = ({ plan }) => {
  return (
    <div className="bg-cyan-800 p-4 text-white rounded-md flex flex-col space-y-5">
      <h1 className="text-center">
        <span className="text-6xl font-bold">{plan.price}</span>/month
      </h1>
      <h1 className="text-4xl font-semibold text-center">{plan.name}</h1>
      <p className="flex-grow">
        {plan.features.map((feature) => (
          <p className="flex items-center gap-2 text-lg"><FaAngleDoubleRight />{feature}</p>
        ))}
      </p>
      <div className="text-center">
        <button className="btn text-xl font-semibold text-cyan-800">Register Now!</button>
      </div>
    </div>
  );
};

export default Plan;
