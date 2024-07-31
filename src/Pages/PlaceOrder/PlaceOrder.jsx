import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First Name'></input>
          <input type='text' placeholder='Last Name'></input>
        </div>
        <input type='email' placeholder='Email address'></input>
        <input type='text' placeholder='Street'></input>
        <div className='multi-fields'>
          <input type='text' placeholder='City'></input>
          <input type='text' placeholder='State'></input>
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code'></input>
          <input type='text' placeholder='Country'></input>
        </div>
        <input type='text' placeholder='Phone'></input>
      </div>
      <div className='place-order-right'>
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
              <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details" id='total'>
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          {/* <button>PROCEES TO CHECKOUT</button> */}
          <button type="button" class="btn btn-outline-danger">PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder
