import React from 'react'
import './footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import{Link} from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear()

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4'>
        
            <div>
              <h1 className="text-white">Plant Shop</h1>
          </div>
          <p className="footer__text">
            Nulla ad occaecat qui ipsum enim
            consectetur dolor est.
            Et fugiat voluptate magna aliquip laboris commodo pariatur dolor magna consequat ut duis ad excepteur.
          </p>
        </Col>
        <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__link-title">Top Categoties</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className="ps-0 border-0">
                <Link to='#'>
                Indor Plants
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to='#'>
                Outdoor Plants
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to='#'>
                Seeds
                </Link>
              </ListGroupItem>
              </ListGroup>
          </div>
        </Col>
        <Col lg='2'>
        <div className="footer__quick-links">
            <h4 className="quick__link-title">Useful Links</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className="ps-0 border-0">
                <Link to='/shop'>
                Shop
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to='/cart'>
                Cart
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to='/login'>
                Login
                </Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to='#'>
                Privacy Policy
                </Link>
              </ListGroupItem>
              </ListGroup>
          </div>
        </Col>
        <Col lg='1'>
        <div className="footer__quick-links">
            <h4 className="quick__link-title">Contact</h4>
            <ListGroup className="footer__contact">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
              <span><i class="ri-map-pin-line"></i></span>
              <p>676303 Parappanagadi ullanam north (p/o) india</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
              <span><i class="ri-phone-line"></i></span>
              <p>+919400373764</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
              <span><i class="ri-mail-line"></i></span>
              <p>jasimihsan@outlook.com</p>
              </ListGroupItem>
              </ListGroup>


          </div>
        </Col>

        <Col lg='12'>
          <p className="footer__copyright">
            Copyright {year} developed by Jasim Ihsan .All rights reserved
          </p>
        </Col>

      </Row>
    </Container>
  </footer>
}

export default Footer