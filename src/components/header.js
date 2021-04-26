import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const pages = [
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <div className="masthead">
      <Link to="/">
        <h1 className="site-title">So You Want to Learn About Figure Skating</h1>
      </Link>

      <div className="nav-links">
        {pages.map(({ name, path }) => (
          <Link to={path}>
            <li className="nav-item">{name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
