import React ,{useState,useEffect} from 'react'

import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';

// import Clock from "../components/UI/Clock"

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import{ Container, Row, Col } from 'reactstrap'
import heroImg from'../assets/images/hero-img.png'

import Services from '../services/Services';
import ProductList from "../components/UI/ProductList";



const Home = () => {

  const[treandingProducts,settreandingProducts] = useState([]);
  
  const[bestSalesProducts,setbestSalesProducts] = useState([]);
  
  const year = new Date().getFullYear();
  useEffect(()=>{

    const filteredTrendingProducts = products.filter(
      item => item.category === 'Indor Plant');

      const filteredBestSalesProducts = products.filter(
        item => item.category === 'seed');



     
      settreandingProducts(filteredTrendingProducts);
      setbestSalesProducts(filteredBestSalesProducts);

  },[]);
  return <Helmet title={'Home'}>
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
          <div className="hero_content">
            <p className="hero__subtitle">
              Trending in {year}
            </p>
            <h2>Mollit voluptate magna ut Lorem voluptate non veniam.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae deleniti, dolorem ipsam doloribus accusamus recusandae minus totam veritatis autem repellendus!
            </p>

            <motion.button whileTap={{scale: 0.9}} className="buy__btn">
              <Link to='/shop'>Shop Now</Link></motion.button>

          </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>


          </Col>
          </Row>
          </Container>
    </section>
    <Services/>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' classname="text-center">
            <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList data={treandingProducts}/>
          </Row>
      </Container>
      <selection className="best__sales">
        <Container>
        <Row>
          <Col lg='12' classname="text-center">
            <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts}/>
          </Row>

          </Container>
      </selection>
    </section>
    <section className="timer__count">
      <Container>
        <Row>

          <div className="clock__top-content">
            <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
            <h3 className="text-white fs-5 mb-3">Quality Plants</h3>
          </div>
          {/* <Clock /> */}
          
          <motion.button whileTap={{scale:1.2}} 
          className='buy__btn store__btn' >
            <Link to='/shop'>Visit Store</Link>
          </motion.button>
          <Col lg='6' md='6'></Col>
          
          <Col lg='6' md='6' className='text-end'>
          
            </Col>
          </Row>
      </Container>
    </section>
  </Helmet>
};

export default Home