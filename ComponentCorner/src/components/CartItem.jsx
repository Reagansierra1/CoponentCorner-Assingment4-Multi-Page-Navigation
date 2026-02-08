import './CartItem.css'

function CartItem({name, price, product, removeFromCart}){
    return(
        <div className="cart-item">
            <p>{name}</p>
            <p className='price'>{price}</p>
            <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
    );
}

export default CartItem;