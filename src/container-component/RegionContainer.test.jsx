import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';

import { regions } from '../../fixtures/fixtures';

jest.mock('react-redux');

describe('RegionContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    selectedOption: {
      region: null,
    },
    option: {
      regions,
    },
  }));

  function renderRegionContainer() {
    return render((
      <RegionContainer />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('show region buttons', () => {
    const { getByText } = renderRegionContainer();

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });

  describe('checkRegion', () => {
    it('change select region', () => {
      const { getByText } = renderRegionContainer();

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledWith({
        type: 'selectOption',
        payload: {
          option: 'region',
          id: 1,
        },
      });
    });
  });
});