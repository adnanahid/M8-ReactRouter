import React from "react";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse py-20">
        <img src="bannerBooks.jpg" className="max-w-sm rounded-lg" />
        <div className="md:w-7/12">
          <h1 className="text-5xl font-bold mb-5">
            Book to freshen up your bookshelf!
          </h1>
          <button className="btn bg-green-600 text-lg font-bold text-black">View this list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
