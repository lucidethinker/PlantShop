import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import heroImg from'../assets/images/hero-img.png'
import '../styles/home.css'

import{ Container, Row, Col } from 'reactstrap'

const Home = () => {
  const year = new Date().getFullYear()
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
            <button className="buy__btn">SHOP NOW</button>
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
  </Helmet>
};

export default Home