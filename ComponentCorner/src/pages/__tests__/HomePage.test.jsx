import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HomePage', () => {
  test('renders without crashing', () => {
    renderWithRouter(
      <HomePage />
    );

    expect(screen.getByText("Component Corner")).toBeInTheDocument;
    expect(screen.getByText("Here you can get anything you would like")).toBeInTheDocument;
    expect(screen.getByText("Shop Here")).toBeInTheDocument;
    expect(screen.getByText("Introduction")).toBeInTheDocument;
    expect(screen.getByText("This website is your go to shop to buy anything technology related.")).toBeInTheDocument;
    expect(screen.getByText("Why Shop with Us?")).toBeInTheDocument;
    expect(screen.getByText("We offer the ebst prices around and offer the baset discount on hot items.")).toBeInTheDocument;
  });
});