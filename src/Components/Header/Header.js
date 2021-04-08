import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../../images/amazon_PNG11.png";
import { useStateValue } from "../../hoc/StateProvider";
import { auth } from "../../firebase";

import "./Header.css";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleNav = () => {
    setShowLinks(!showLinks);
  };

  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link className="link" to="/">
        <img className="header__logo" src={logo} alt="amazon logo" />
      </Link>

      <div className="header__search" id={showLinks ? "hidden" : ""}>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <a onClick={toggleNav} href="#" className={"toggle__button "}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="header__nav" id={showLinks ? "hidden" : ""}>
        <Link className="link" to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link className="link" to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link className="link link__optionBasket" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
