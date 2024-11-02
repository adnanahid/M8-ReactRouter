import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="bannerbooks.png"
          className="max-w-sm rounded-lg"
        />
        <div className="w-7/12">
          <h1 className="text-5xl font-bold">Book to freshen up your bookshelf!</h1>

          <button className="btn bg-green-400">view this list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
