import React from "react";
import Link from "./Link";
import { BiSolidUserCircle } from "react-icons/bi";

const Navbar = ({ toggle, setToggle }) => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav className="max-w-screen-xl mx-auto flex justify-between items-center my-3 px-3">
      <section className="flex items-center gap-5">
        <button className="md:hidden flex" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
        <h2 className="text-2xl font-bold">adnan's</h2>
      </section>

      <section className="flex items-center">
        <ul
          className={`${
            toggle ? "top-10 left-3" : "top-10 -left-60"
          } md:flex md:static absolute duration-1000`}
        >
          {routes.map((route) => (
            <Link route={route}></Link>
          ))}
        </ul>
        <div>
          <BiSolidUserCircle className="w-8 h-8" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
