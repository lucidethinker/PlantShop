import React,{useState} from 'react'

import  CommonSection  from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import {Container,Row,Col} from 'reactstrap'

import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList'
const Shop = () => {

  const[productsData,setProductsData] = useState(products)

  const handleFilter = (e) =>{
    const filtervalue = e.target.value;
    if(filtervalue === "sofa")
    {
      const filtereProducts = products.filter((item)=>item.category === "sofa"
      );
      setProductsData(filtereProducts)
  }
  
};
  return <Helmet title="Shop">
    <CommonSection title="Products"/>
    <section>
    <Container>
      <Row>
        <Col lg='3' md='3'>
            <div className="filter__widget">
              <select onChange={handleFilter} >
                <option > Filter By Category</option>
                <option value="Indor Plant">Indor Plant</option>
                <option value="Outdor Plant">Outdor Plant"</option>
                <option value="Seed">Seed</option>
              </select>
            </div>
        </Col>
        <Col lg='3' md='3'>
        <div className="filter__widget">
              <select  >
                <option > Sort By </option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
                <option value="Seed">Seed</option>
              </select>
            </div>
            </Col>
        <Col lg='6' md='6'>
            <div className="search__box">
                  <input type="text" placeholder="Search....." />
                  <span >
                  <i class="ri-search-2-line"></i>
                  </span>
            </div>
        </Col>
      </Row>
      </Container>
    </section>

    <selection>
      <Container>
        <Row>
          {
            productsData.length ===0?(<h1>No products are found!</h1>
            ):<ProductList data={productsData}
 />  }
        </Row>
        </Container>
    </selection>


  </Helmet>
}

export default Shop;