import React from 'react'
import {Container, Row, Col,Form,FormGroup} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet';
import CommonSection  from '../components/UI/CommonSection'
import '../styles/checkout.css';


import { useSelector } from 'react-redux';

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return <Helmet title="Checkout">
      <CommonSection title="Checkout"/>
      <section>
        <Container>
          <Row>
            <Col lg="8"><h6 className="mb-4 fw-bold">Billing information</h6>
            <Form>
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter Your Name" />
                </FormGroup>
                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter Your Email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Postal code" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Contry" />
                </FormGroup>

            </Form>
           </Col>
           <Col lg="4"> 
           <div className="checkout__cart">
            <h6>Total Qty:<span>{totalQty} items</span></h6>
            <h6>Subtotal:<span>₹{totalAmount}</span></h6>
            <h6>
              <span>
      
              Shipping:<br />
              free shipping
              </span><span>₹100
              </span> 
              </h6>
            <h4>Total Cost : <span>₹{totalAmount}</span> 
            </h4>
           </div>
           <button className="buy__btn auth__btn w-100">
            Place an order
           </button>
           </Col>
              </Row>
              </Container>
              </section>
      </Helmet>
}

export default Checkout