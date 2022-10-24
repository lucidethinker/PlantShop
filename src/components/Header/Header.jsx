import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../assets/images/eco-logo.png'
import usericon from '../../assets/images/user_icon.png'
import { Container , Row } from 'reactstrap'

const Header = () => {
  return <header className="header">
    <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <div>
              <h1>Plant Shop</h1>
              <p>since 2022</p>
          </div>
        </div>
          <div className="navigation">
           <ul className="menu">
            <li className="nav__item">
                <NavLink to="home">Home</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="Shop">Shop</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="cart">Cart</NavLink>
            </li>
            <li className="nav__item">
                <NavLink to="home">Home</NavLink>
            </li>
           </ul>
          </div>

          <div className="nav__icons">


            <span className="fav__icon">
            <i class="ri-heart-fill"></i>
            </span>
            <span className="cart__icon">
            <i class="ri-shopping-cart-fill"></i>
            </span>
            <span>
              <img src={usericon} alt="userimage" />
            </span>
          </div>

          <div className="mobile__menu">
            <span>
            <i class="ri-menu-line"></i>
            </span>
          </div>


        </div>
      </Row>
    </Container>
  </header>
}

export default Header