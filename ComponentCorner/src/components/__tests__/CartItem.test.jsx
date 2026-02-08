import { fireEvent, render, screen } from '@testing-library/react';
import CartItem from '../CartItem';


const productsMock = 
    { 
    id: 1, 
    name: "iPhone", 
    price: 1999.99, 
    image: "https://placehold.co/600x400",
    description: "Premium smart phone for a premium user"
  };

const removeFromCartMock = vi.fn();

describe('ProductsPage', () => {
  test('renders without crashing', () => {
    render(
      <CartItem 
        name={productsMock.name}
        price={productsMock.price}
        product={productsMock}
        removeFromCart={() => {}}
      />
    );

    expect(screen.getByText("iPhone")).toBeInTheDocument;
    expect(screen.getByText("1999.99")).toBeInTheDocument;

    expect(screen.getByText("Remove"));
  });
  test("test buttons", () => {
    render(
      <CartItem 
        name={productsMock.name}
        price={productsMock.price}
        product={productsMock}
        removeFromCart={removeFromCartMock}
      />
    );
    const removeFromCartButton = screen.getByText("Remove");
    fireEvent.click(removeFromCartButton);

    expect(removeFromCartMock).toHaveBeenCalledTimes(1);
  });
});