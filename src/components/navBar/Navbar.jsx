import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";

import { AiOutlineHeart } from "react-icons/ai";

import { BiCart, BiHelpCircle } from "react-icons/bi";

import { HiOutlineUserGroup } from "react-icons/hi";
export const Navbar = () => {
  return (
    <div className="nav_main">
      <div className="nav_left">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/GetYourGuide_company_logo.png"
        />
      </div>
      <div className="nav_right">
        <div className="nav_language nav_li">
          <p>English</p>
          <span className="nav_icon">
            <FaChevronDown />
          </span>
          <div className="nav_select-language">
            <div className="nav_select-language-top">
              <h4>All Languages</h4>
              <hr></hr>
            </div>
            <div className="nav_select-language-name">
              <ul >
                <li> English (United States)</li>
                <li> Deutsch (Deutschland) </li>
                <li> German (Germany)</li>
                <li> English (United Kingdom)</li>
                <li>Deutsch</li>
                <li> English (United States)</li>
                <li> Deutsch (Deutschland) </li>
                <li> German (Germany)</li>
                <li> English (United Kingdom)</li>
              </ul>
              <ul>
                <li>Deutsch</li>
                <li> English (United States)</li>
                <li> Deutsch (Deutschland) </li>
                <li> German (Germany)</li>
                <li> English (United Kingdom)</li>
                <li>Deutsch</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav_INR nav_li">
          <p>INR ($)</p>
          <span className="nav_icon">
            <FaChevronDown />
          </span>
        </div>
        <div className="nav_wishlist nav_li">
          <span className="nav_icon">
            <AiOutlineHeart />
          </span>
          <p>Wishlist</p>
        </div>
        <div className="nav_cart nav_li">
          <span className="nav_icon">
            <BiCart />
          </span>
          <p>Cart</p>
        </div>
        <div className="nav_help nav_li">
          <span className="nav_icon">
            <BiHelpCircle />
          </span>
          <p>Help</p>
        </div>
        <div className="nav_logIn nav_li">
          <span className="nav_icon">
            <HiOutlineUserGroup />
          </span>
          <p>Log in</p>
          <span className="nav_icon">
            <FaChevronDown />
          </span>
        </div>
        <div className="nav_signUp">
          <button className="nav_btn_signUp">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
