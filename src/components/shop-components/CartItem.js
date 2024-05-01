// react imports
import React, { useContext} from 'react'

// context imports
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {

    const { id, image, title, price } = props;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div>
      <img className='w-12' src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{price}€</p>
        <div>
            <button onClick={() => removeFromCart(id)}>-</button>
            <input type="text" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
