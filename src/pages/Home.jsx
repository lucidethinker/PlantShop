import React ,{useState,useEffect} from 'react'

import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';

import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import{ Container, Row, Col } from 'reactstrap'
import heroImg from'../assets/images/hero-img.png'

import Services from '../services/Services';
import ProductList from "../components/UI/ProductList";

const Home = () => {

  const[data,setData] = useState(products)
  const year = new Date().getFullYear();
  useEffect(()=>{

    const filteredProducts = products.filter(
      item => item.category === 'chair');
      setData(filteredProducts);

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
            <ProductList data={data}/>
          </Row>
      </Container>
    </section>
  </Helmet>
};

export default Home