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
    const filterValue = e.target.value;
    if(filterValue === 'Indor Plants')
    {
      const filteredProducts = products.filter((item)=>item.category === 'Indor Plant'
      );
      setProductsData(filteredProducts)
  }
  if(filterValue === 'Outdor Plants')
    {
      const filteredProducts = products.filter((item)=>item.category === 'Outdor Plant'
      );
      setProductsData(filteredProducts)
  }
  if(filterValue === 'Seeds')
    {
      const filteredProducts = products.filter((item)=>item.category === 'seed'
      );
      setProductsData(filteredProducts)
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
                <option value="Indor Plants">Indor Plants</option>
                <option value="Outdor Plants">Outdor Plants</option>
                <option value="Seeds">Seeds</option>
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

    <selection className='pt-05'>
      <Container>
        <Row>
          {
            productsData.length === 0? <h1>No products are found!</h1>
            :<ProductList data={productsData} />  }
        </Row>
        </Container>
    </selection>


  </Helmet>
}

export default Shop;