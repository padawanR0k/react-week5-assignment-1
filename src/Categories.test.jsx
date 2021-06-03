import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

jest.mock('react-redux');

test('Categories', () => {
  const categories = [
    { id: 1, name: '한식' },
  ];

  const { getByText } = render(<Categories categories={categories} />);
  const button = getByText('한식');

  fireEvent.click(button);

  expect(button).toBeCalled();
});
