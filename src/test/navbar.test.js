import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';

it('test navbar render', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
