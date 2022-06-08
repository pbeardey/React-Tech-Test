// src/__tests__/Search.test.js

import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

describe("Search", () => {
  
  it("renders Search", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders textbox for Search", () => {
    render(<Search />);
    const inputBox = screen.getByRole('textbox');
    expect(inputBox).toBeInTheDocument();
  });
});