import './ProductCard.css'
function ProductCard({name, price, image, description, product, addToCart}) {
  return (
    <div className="product-card">
        <img src={image}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <p className='price'>{price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default ProductCard;