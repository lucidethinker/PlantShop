import React,{useRef,useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './header.css'
import logo from '../../assets/images/logo.svg'
import usericon from '../../assets/images/user-icon.png'
import { Container , Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import {Link} from 'react-router-dom'

import {motion} from 'framer-motion'

const nav__link = [
  {
    path:'home',
    display: 'Home'
  },
  {
    path:'shop',
    display: 'Shop'
  },
  {
    path:'cart',
    display: 'Cart'
  },

]

const Header = () => {

  const headerRef = useRef(null)
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const profileActionRef = useRef(null)


  const menuRef = useRef(null)
  const navigate = useNavigate()
  const {currentUser} = useAuth()


  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80)
      {
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')

      }
    })
  }

 useEffect(()=>{
 stickyHeaderFunc()

 return ()=>window.removeEventListener('scroll',stickyHeaderFunc)

 
  })
  const menuToggle = ()=> menuRef.current.classList.toggle('active__menu ') 
  

  const navigateToCart = () => {
              navigate('/cart')
  };
  
  const toggleProfileActions = ()=> 
  profileActionRef.current.classList.toggle("show__profileActions")


  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div>
              <h1>Plant Shop</h1>
          </div>
        </div>
          <div className="navigation" ref={menuRef} onClick={menuToggle}>
           <ul className="menu">
           
            {
              nav__link.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? 'nav__active' :''
                  }
                  >
                    {item.display}
                  </NavLink>
                    </li>
              ))}
            </ul>
          </div>

          <div className="nav__icons">


            <span className="fav__icon">
            <i class="ri-heart-fill"></i>
            <span className="badge">1</span>
            </span>
            <span className="cart__icon" onClick={navigateToCart}>
            <i class="ri-shopping-cart-fill"></i>
            <span className="badge">{totalQuantity}</span>
            </span>
            <div className="profile">
              <motion.img whileTap={{scale:1.2}} src={currentUser?currentUser.photoURL: usericon} 
              onClick={toggleProfileActions} />
              
              <div className="profile__actions" 
              ref={profileActionRef} 
              onClick={toggleProfileActions}>
                {
                  currentUser? (<span>Logout</span>) :
                  ( <div>
                    <Link to='/signup'>Signup</Link>
                    <Link to='/login'>Login</Link>
                    </div>
                )}
              </div>
            </div>
            <div className="mobile__menu">
            <span onClick={menuToggle}>
            <i className="ri-menu-line"></i>
            </span>
          </div>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header