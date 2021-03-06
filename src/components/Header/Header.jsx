import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let links = [
    {
      link: "/",
      id: 1,
      title: "Home page",
    },
    {
      link: "/add",
      id: 2,
      title: "Add",
    },
  ];
  return (
    <div>
      {/* {links.map((link) => (
        <Link style={{ margin: "10px" }} key={link.id} to={link.link}>
          {link.title}
        </Link>
      ))} */}
      {/* вручную down below */}
      <Link style={{ margin: "10px" }} to="/">
        Home page
      </Link>
      <Link style={{ margin: "10px" }} to="/add">
        Add
      </Link>
    </div>
  );
};

export default Header;
