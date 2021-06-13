import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "./../../images/logo.png";

import { FaCartArrowDown } from "react-icons/fa";

export default class Navbar extends Component {
  // init-ing state for toggle feat
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    // BSclass came from previous navbar-div
    // itterable menu items added, type array to loop through, of objects
    menus: [
      {
        id: 1, // needed in react flow
        text: "Home",
        url: "/",
      },
      {
        id: 2,
        text: "About",
        url: "/about",
      },
      {
        id: 3,
        text: "services",
        url: "/services",
      },
      {
        id: 4,
        text: "Contact",
        url: "/contact",
      },
    ],
  };

  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: true,
          navbarClass: "collapse navbar-collapse show",
        });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand ml-2">
              <img src={logo} alt="logo goes here" width="40px" />
            </Link>
          </div>

          {/* button to toggle the menu bar */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.myToggler}
          >
            <span className="text-white">Menu</span>
          </button>

          {/* FIXME: */}
          {/* DONE: I was building nav-items under the same li */}
          <div className={this.state.navbarClass}>
            <ul className="nav navbar-nav ml-auto mr-5">
              {/* INCLUDE: itterasble menu items accessed from state-menus - DONE: */}
              {this.state.menus.map(menu => {
                return (
                  <li key={menu.id} className="nav-item">
                    <Link
                      to={menu.url}
                      className="nav-link text-white text-capitalize"
                    >
                      {menu.text}
                    </Link>
                  </li>
                );
              })}

              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  <FaCartArrowDown className="cart-icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
