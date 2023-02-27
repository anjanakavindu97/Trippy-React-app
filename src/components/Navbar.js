import React, { Component } from 'react';
import './Navbar.css';
import { MenuItems } from './Menuitems';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
  render() {
    return (
      <nav className="NavbarItem">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        {item.icon}
                        {item.title}</Link>
                    </li>
                )
            })}
             <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;