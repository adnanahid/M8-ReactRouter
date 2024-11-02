import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const info = data.find((bookInfo) => bookInfo.bookId === Number(bookId));
  return (
    <div className="flex flex-col items-center md:flex-row p-6 rounded-lg">
      {/* Book Image */}
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <img
          src={info.image}
          alt="Book Cover"
          className="w-8/12 mx-auto rounded-md"
        />
      </div>

      {/* Book Details */}
      <div className="md:w-2/3 mt-6 md:mt-0 md:ml-8">
        {/* Title and Author */}
        <h2 className="text-2xl font-bold text-gray-800">{info.bookName}</h2>
        <p className="text-gray-500 mb-2">By: {info.author}</p>

        {/* Genre */}
        <p className="text-gray-600 mb-4">{info.category}</p>

        {/* Review Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Review</h3>
          <p className="text-gray-600 mt-2">{info.review}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap mt-4 space-x-2">
          {info.tags.map((tag, idx) => (
            <span key={idx} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>

        {/* Additional Details */}
        <div className="mt-4">
          <p className="text-gray-800">
            <strong>Number of Pages: </strong>{info.totalPages}
          </p>
          <p className="text-gray-800">
            <strong>Publisher: </strong>{info.publisher}
          </p>
          <p className="text-gray-800">
            <strong>Year of Publishing: </strong>{info.yearOfPublishing}
          </p>
          <p className="text-gray-800">
            <strong>Rating: </strong>{info.rating}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex mt-6 space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Read
          </button>
          <button className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
