import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl mb-10 mx-auto">
      <figure className="px-10 pt-10">
        <img src={book.image} alt={book.bookName} className="rounded-xl h-52" />
      </figure>
      <div className="card-body">
        <p className="flex gap-5">
          {book.tags.map((tag, idx) => (
            <span key={idx} className="badge badge-outline">{tag}</span>
          ))}
        </p>
        <h2 className="card-title">{book.bookName}</h2>
        <h2 className="text-base">by: {book.author}</h2>
        <hr className="dashed" />
        <div className="flex justify-between">
          <h2 className="card-title text-base">{book.category}</h2>
          <Link to={`book/${book.bookId}`}>
            <button className="btn btn-sm">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
