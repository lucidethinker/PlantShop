import React from 'react'

import  CommonSection  from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import {Container,Row,Col} from 'reactstrap'

const Shop = () => {
  return <Helmet title="Shop">
    <CommonSection title="Products"/>
    <section>
    <Container>
      <Row>
        <Col lg='3' md='3'>
            <div className="filter__widget">
              <select  >
                <option value="Indor Plant">Indor Plant</option>
                <option value="Outdor Plant">Outdor Plant"</option>
                <option value="Seed">Seed</option>
              </select>
            </div>

        </Col>
        <Col lg='3' md='3'></Col>
        <Col lg='3' md='3'></Col>
      </Row>
      </Container>
    </section>
  </Helmet>
}

export default Shop