// src/__tests__/App.test.js

import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe("App", () => {
  
  it("renders App", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders logo", () => {
    render(<App />);
    const logoAltText = screen.getByAltText(/NASA logo/i);
    expect(logoAltText).toBeInTheDocument();
  })
});