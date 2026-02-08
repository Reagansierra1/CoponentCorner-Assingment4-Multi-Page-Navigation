import CartItem from "../components/CartItem";

function CartPage({products, removeFromCart, priceTotal}){
    return(
        <div>
        {products.map(product => (
        <CartItem
          name={product.name}
          price={product.price}
          product={product}
          removeFromCart = {removeFromCart}        
        />
      ))}
      {products.length > 0 ?
      (<p>Total: ${priceTotal}</p>)
      : <h2>Shopping is Empty</h2>}
      </div>
    );
}

export default CartPage;