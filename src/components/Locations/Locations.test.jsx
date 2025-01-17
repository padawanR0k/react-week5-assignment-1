import { fireEvent, render } from '@testing-library/react';

import Locations from './Locations';
import { locations } from '../../fixtures';

describe('Locations', () => {
  it('전달된 지역명들을 노출한다.', () => {
    const { getByText } = render(<Locations locations={locations} />);
    expect(getByText('서울')).not.toBeNull();
  });

  it('지역을 클릭하면 onClick 함수를 실행한다.', () => {
    const handleCategory = jest.fn();
    const { getByText } = render(
      <Locations
        onClick={handleCategory}
        locations={locations}
      />,
    );

    fireEvent.click(getByText('서울'));

    expect(handleCategory).toBeCalledWith({ id: 1, name: '서울', selected: false });
  });
});
