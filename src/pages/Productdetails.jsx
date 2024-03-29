import React,{useState ,useRef, useEffect} from 'react'

import { Container, Row, Col} from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product-details.css'
import {motion} from 'framer-motion'
import ProductList from '../components/UI/ProductList'
import{ useDispatch } from 'react-redux'
import {cartActions} from '../Redux/slices/cartSlice'
import {toast} from "react-toastify"


const Productdetails = () => {
 

  const [tab,setTab] = useState('desc')
  const reviewUser = useRef("")
  const reviewMsg = useRef("")
  const dispatch = useDispatch()

  const[rating,setRating] = useState(null)
  const { id } = useParams()
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName, 
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,}  = product;


const relatedProducts = products.filter(item => item.category === category)

const submitHandler = (e) => {
  
  e.preventDefault()
  const reviewUsername = reviewUser.current.value;
  const reviewUserMsg = reviewMsg.current.value;

  const reviewObj = {
    userName: reviewUsername,
    text: reviewUserMsg,
    rating,    
  };

  console.log(reviewObj);
  toast.success("Review Submitted")

};

const addToCart =() => {
  dispatch(cartActions.addItem({
    id,
    image:imgUrl,
    productName,
    price,

  }))

   toast.success("Item added to cart")

};

useEffect(()=>{
  window.scrollTo(0,0);

}, [product]);


  return <Helmet title={productName}>
    <CommonSection title={productName}/>
    <section  className="pt-0">
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt=''/></Col>
          <Col lg='6'>
                  <div className="product__details d-flex all">
                    <div >
                    <h1>{productName}</h1>
                    <div className="product__rating d-flex align-items-center gap-5 mb-3"></div>
                  <div>
                  <span onClick={() =>setRating(1)}> <i class="ri-star-fill"></i></span>
                  <span onClick={() =>setRating(2)}> <i class="ri-star-fill"></i></span>
                  <span onClick={() =>setRating(3)}> <i class="ri-star-fill"></i></span>
                  <span onClick={() =>setRating(4)}> <i class="ri-star-fill"></i></span>
                  <span onClick={() =>setRating(5)}> <i class="ri-star-fill"></i></span>
                  
          </div>
          <p>(<span >{avgRating}</span>ratings)
          </p>
          </div>
           </div>
           <div className="d-flex align-items-center gap-5">
          <span className="product__price">₹{price}</span>
          <span>
            Category:{category.toLowerCase()}
          </span>
          </div>
          <p>{shortDesc}</p>

          <motion.button 
          whileTap={{scale:1.2}} 
          className="buy__btn" onClick={addToCart}> Add to Cart</motion.button>
          </Col>
          </Row>
      </Container>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wraper d-flex align-items-center gap-5">
                <h6 className={`${tab ==="desc" ? "active__tab" :""}`} onClick={()=>setTab('desc')}>Description</h6>
                <h6 className={`${tab ==="rev" ? "active__tab" :""}`} onClick={()=>setTab('rev')} >Reviews ({reviews.length})</h6>
              </div>



              {
                tab === "desc" ?<div className="tab__content mt-5">
                <p>{description}</p>
              </div> : <div className='product__review mt-5'>
                <div className="review__wraper ">
                  <ul>
                    {
                      reviews.map((item,index)=>(
                        <li  key={index} className="mb-4">
                        <h6>Appu </h6>  
                        <span>{item.rating} (rating)</span>
                        <p>{item.text}</p>
                        </li>

                      ))
                    }
                  </ul>

                  <div className="review__form">
                    <h4> Leave Your Experience</h4>

                    <form action="" onSubmit={submitHandler}>
                      <div className="form__group">
                        <input type="text" placeholder="Enter name"
                        ref={reviewUser}
                        required
                        
                        />
                      </div>

                     <div className="form__group d-flex align-items-center gap-5 rating__group">
                      <motion.span whileTap={{scale:1.2}}  onClick={() =>setRating(1)}><i class="ri-star-fill">1</i></motion.span >
                      <motion.span whileTap={{scale:1.2}}  onClick={() =>setRating(2)}><i class="ri-star-fill">2</i></motion.span >
                      <motion.span whileTap={{scale:1.2}}  onClick={() =>setRating(3)}><i class="ri-star-fill">3</i></motion.span >
                      <motion.span whileTap={{scale:1.2}}  onClick={() =>setRating(4)}><i class="ri-star-fill">4</i></motion.span >
                      <motion.span whileTap={{scale:1.2}}  onClick={() =>setRating(5)}><i class="ri-star-fill">5</i></motion.span >
                     </div>

                     <div className="form__group ">
                        <textarea 
                        ref = {reviewMsg}
                        rows={4}
                        type="text" 
                        placeholder="Review Message ...."
                        required
                         />
                         
                      </div>
                      <motion.button whileTap={{scale:1.5}}  type='submit' className="buy__btn">
                        Submit
                      </motion.button>
                    </form>

                  </div>
                </div>
              </div>
              }

            
            </Col>

            <Col lg='12' className='mt-5'>
              <h2 className="related__title">
                You might also like
              </h2>
            </Col>
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
  
    </section>
  </Helmet>
}

export default Productdetails