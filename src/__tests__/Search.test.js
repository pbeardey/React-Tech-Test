// src/__tests__/Search.test.js

import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const setSearchResults = () => {}

  it("renders Search", () => {
    const { asFragment } = render(<Search setSearchResults={setSearchResults}/> );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders textbox for Search", () => {
    render(<Search setSearchResults={setSearchResults}/> );
    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
  });

  it("renders button for Search", () => {
    render(<Search setSearchResults={setSearchResults}/> );
    const inputButton = screen.getByRole("button", { name: /go/i });
    expect(inputButton).toBeInTheDocument();
  });
});