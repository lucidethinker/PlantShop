import React from 'react'
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection  from '../components/UI/CommonSection'
import {Container , Row, Col} from 'reactstrap';
import { motion } from 'framer-motion';
import {cartActions} from '../Redux/slices/cartSlice'
import { useSelector,useDispatch } from 'react-redux';


const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);


  return(
   <Helmet title="Cart">

      <CommonSection title="shopping cart"/>
      <section>
          <Container>
              <Row>
                  <Col lg="9">
                      {
                        cartItems.length === 0 ? (<h2>No item added to cart</h2>) :(
                          <table className="table borderd">
                             <thead>
                              <tr>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Price</th>
                              <th>Qty</th>
                              <th>Delete</th>
                              </tr>
                              </thead> 
                                <tbody>
                                  {
                                    cartItems.map((item,index) =>(
                                        <Tr item={item} key={index}/>
                                     
                                    ))
                                  }


                                  </tbody>

                          </table>
                        )}

                    
                      </Col>


                      <col lg='3'></col>
                      </Row>
                      </Container>
                      </section>
                      </Helmet>
                     )}
       
const Tr = ({item}) =>{
  const dispatch = useDispatch()
  const deleteProduct = () =>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return  <tr>
                                    

  <td>
    <img src={item.imgUrl} alt="" />
  </td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}</td> 
  <td>
  <motion.i 
  whileTap={{scale: 1.2}} 
  onClick={deleteProduct}
  class="ri-delete-bin-6-line"></motion.i>
  </td>
</tr>
}
export default Cart