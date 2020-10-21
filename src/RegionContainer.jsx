import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonList from './ButtonList';

import {
  checkRegion,
} from './actions';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  function handleClickRegion(id) {
    dispatch(checkRegion(id));
  }

  return (
    <ButtonList
      labels={regions}
      onClick={handleClickRegion}
    />
  );
}
