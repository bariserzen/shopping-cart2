import React, { useContext} from 'react';
import './cart.css';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';
import { useNavigate } from 'react-router-dom';






const Cart = () => {


  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();


  return (
    <div className='cart'>

      <div>
        <h1>Your Cart Items</h1>
      </div>


      <div className='cartItems'>
        {PRODUCTS.map((product, index) => {

        if (cartItems[product.id]  === 0) {
        return null;
         }
        else {
            return <CartItem  data={product} key={index} />;
          }
          
        })}
      </div>

      {totalAmount > 0 ? ( 
        <div className='checkout' >
        <p>Subtotal: $ {totalAmount} </p>
        <button onClick={() => navigate('/')}> Continue Shopping</button>
        <button style={{background: 'green'}}> Checkout </button>
      </div>
      ) : (
        <h1 className='empty'> Your Cart is Empty</h1>
      )}
      

    </div>
  )
}

export default Cart;
