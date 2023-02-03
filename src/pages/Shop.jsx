import React, { useState, useEffect,useCallback } from 'react';

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import useStore from "../assets/data/products";

import products from "../assets/data/data"

const Shop = () => 
{
  const products = useStore(useCallback((state) => state.products, []));
  const filter = useStore(useCallback((state) => state.filter, []));
  const setFilter = useStore((state) => state.setFilter);

  const sortedProducts = products
    .filter((product) =>
      product.productName.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });

  return (
    <Helmet title="Shop">
       <CommonSection title="Products"/>
       <section>
    <Container>
      <Row>
        <Col lg='3' md='6'>
            <div className="filter__widget">
            <select >
                <option > Filter By Category</option>
                <option value="Indor Plants">Indoor Plants</option>
                <option value="Outdor Plants">Outdor Plants</option>
                <option value="Seeds">Seeds</option>
              </select>
            </div>
        </Col>
        <Col lg='3' md='6' className='text-end'>
        <div className="filter__widget">
              <select  >
                <option > Sort By </option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
                <option value="Seed">Seed</option>
              </select>
            </div>
            </Col>
            <Col lg='6' md='12'>
    <div className="search__box">
      <input
        type="text"
        placeholder="Search....."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <span >
      <i class="ri-search-2-line"></i>
</span></div>
      {sortedProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.productName}</h3>
          <p>{product.category}</p>
          <p> ₹ {product.price}</p>
          <img src={product.imgUrl} alt={product.productName} />
        </div>
      ))} 
        <p>No items found</p>
        </Col>
      </Row>
      </Container>
    </section>
    </Helmet>
  );
};
export default Shop;
