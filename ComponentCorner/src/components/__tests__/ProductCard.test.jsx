import { fireEvent, render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';


const productsMock = 
    { 
    id: 1, 
    name: "iPhone", 
    price: 1999.99, 
    image: "https://placehold.co/600x400",
    description: "Premium smart phone for a premium user"
  };

const addToCartMock = vi.fn();

describe('ProductsPage', () => {
  test('renders without crashing', () => {
    render(
      <ProductCard 
        name={productsMock.name}
        price={productsMock.price}
        image={productsMock.image}
        description={productsMock.description}
        product={productsMock}
        addToCart={() => {}}
      />
    );

    expect(screen.getByText("iPhone")).toBeInTheDocument;
    expect(screen.getByText("Premium smart phone for a premium user")).toBeInTheDocument;
    expect(screen.getByText("1999.99")).toBeInTheDocument;

    expect(screen.getByText("Add to cart"));
  });
  test("test buttons", () => {
    render(
      <ProductCard 
        name={productsMock.name}
        price={productsMock.price}
        image={productsMock.image}
        description={productsMock.description}
        product={productsMock}
        addToCart={addToCartMock}
      />
    );
    const addTocartButton = screen.getByText("Add to cart");
    fireEvent.click(addTocartButton);

    expect(addToCartMock).toHaveBeenCalledTimes(1);
  });
});