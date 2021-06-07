import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="navbar container">
      <h2>
        <Link to="/">FakeShop</Link>
      </h2>
    </div>
  );
};

export default Header;
