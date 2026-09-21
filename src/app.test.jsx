import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// A simple math helper function to test logic
const addNumbers = (a, b) => a + b;

describe('Simple Project Unit Tests', () => {
  
  it('should correctly add two numbers together', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  // Test 2: Testing the React UI Component
  it('should render the main Vite heading on the screen', () => {
    render(<App />);
    const headingElement = screen.getByText(/Get started/i);
    expect(headingElement).toBeInTheDocument();
  });

});
