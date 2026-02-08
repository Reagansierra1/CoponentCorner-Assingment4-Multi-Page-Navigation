import ProductCard from "../components/ProductCard";

function ProductsPage({products, addToCart, priceTotal}){
    return(
        <div>
        {products.map(product => (
            <ProductCard
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                product={product}
                addToCart={addToCart}
                priceTotal={priceTotal}
            />
        ))}
      </div>
    );
}

export default ProductsPage;