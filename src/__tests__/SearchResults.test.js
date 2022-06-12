// src/__tests__/SearchResults.test.js

import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults';
import Search from '../components/SearchResults';

describe("SearchResults", () => {
  const results=[
    { 
      nasaId: "123",
      href:"https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      description:"MoonFace"
    }
  ]
  
  it("renders SearchResult with no results", () => {
    const { asFragment }=render(<SearchResults results={[]}/>);
    expect(asFragment()).toHaveTextContent(/No Results/i);
  })

  it("renders SearchResults", () => {
    const { asFragment } = render(<SearchResults results={results}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders image for SearchResults", () => {
    render(<SearchResults results={results}/>);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });
});