import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

describe('Navbar component', () => {
  test('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
