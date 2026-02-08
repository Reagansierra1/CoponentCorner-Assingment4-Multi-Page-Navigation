import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import './App.css';

function App() {
  const [productsincart, setCartState] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsincart));
  }, [productsincart]);
  
  const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
  ];
  
  const addToCart = (product) => {
    setCartState([...productsincart, product])
  }

  const removeFromCart = (productToRemove) => {
    setCartState(productsincart.filter((product) => product != productToRemove));
  }

  const priceTotal = productsincart.reduce((totalPrice, product) => {
      return totalPrice + product.price
  }, 0);

  return (
    <BrowserRouter>
    <div className="app">
      <Header 
        storeName="Component Corner"
        cartAmount={productsincart.length}/>
        <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage
                products={products}
                addToCart={addToCart}
                priceTotal={priceTotal}
              />} />
          <Route path="/cart" element={<CartPage 
            products={productsincart}
            removeFromCart={removeFromCart}
            priceTotal={priceTotal}
          />} />
        </Routes>
        </div>
      <Footer
        storeName="Component Corner"
        phone="909-888-4534"
        email="test@company.com"
        address="123 Elvis Street, Counter City, ND 12567"
      />
    </div>
    </BrowserRouter>
  )
}

export default App;