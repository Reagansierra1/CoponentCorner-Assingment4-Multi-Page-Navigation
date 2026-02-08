import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock;

describe('PostCard State Management', () => {
    beforeEach(() => {
    // Clear all mock calls before each test
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

    test('renders without crashing', () => {
        render(<App />)
        const elements = screen.getAllByText(/Component Corner/i);
        expect(elements.length).toBe(3); 
        expect(screen.getByText(/Here you can get anything you would like/i)).toBeInTheDocument();
        expect(screen.getByText(/123 Elvis Street/i)).toBeInTheDocument();
        expect(screen.getByText("🛒")).toBeInTheDocument();
    });
    test('localstorage testing on startup', () => {
        const savedCart = JSON.stringify([{ id: 1, name: "Wireless Headphones", price: 99.99, description: "Premium noise-cancelling headphones with 30-hour battery life" }]);
        localStorageMock.getItem.mockReturnValue(savedCart);
        render(<App />)
        expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
        expect(screen.getByTestId("cart-badge")).toHaveTextContent("1");
    });
    test('localstorage testing saving to localstorage', async () => {
        localStorageMock.getItem.mockReturnValue('[]');
        render(<App />)
        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
        });
    });
    test('persists posts across component remounts', async () => {
        // Initial render with empty localStorage
        localStorageMock.getItem.mockReturnValue('[]');
        
        const { unmount } = render(<App />);
        
        const savedCart = [{ id: 1, name: "Wireless Headphones", price: 99.99, description: "Premium noise-cancelling headphones with 30-hour battery life" }];
        
        // Verify save happened
        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
        });
        
        // Unmount component  (simulate closing a browser tab)
        unmount();
        
        // Mock localStorage returning the saved data
        localStorageMock.getItem.mockReturnValue(JSON.stringify(savedCart));
        
        // Re-render component (simulating user openning the app again)
        render(<App />);
        
        // Verify data was loaded
        expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
    });
});